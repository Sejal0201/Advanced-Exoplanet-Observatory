from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import (
    hash_password,
    create_access_token,
)

from app.models.user import User
from app.repositories.user_repository import UserRepository

from app.schemas.user import (
    UserCreate,
    UserLogin,
)


class UserService:

    def __init__(self):
        self.repository = UserRepository()

    def register(
        self,
        db: Session,
        payload: UserCreate,
    ) -> User:

        existing_user = self.repository.get_by_email(
            db,
            payload.email,
        )

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Email already registered.",
            )

        user = User(
            first_name=payload.first_name,
            last_name=payload.last_name,
            email=payload.email,
            password_hash=hash_password(
                payload.password,
            ),
        )

        return self.repository.create(
            db,
            user,
        )

    def login(
        self,
        db: Session,
        data: UserLogin,
    ):
        user = self.repository.authenticate(
            db,
            data.email,
            data.password,
        )

        if not user:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials",
            )

        token = create_access_token(
            str(user.id),
        )

        return {
            "access_token": token,
            "token_type": "bearer",
        }