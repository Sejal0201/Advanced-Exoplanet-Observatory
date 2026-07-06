from sqlalchemy.orm import Session

from app.models.user import User
from app.core.security import verify_password


class UserRepository:

    def get_by_email(
        self,
        db: Session,
        email: str,
    ) -> User | None:
        return (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

    def create(
        self,
        db: Session,
        user: User,
    ) -> User:
        db.add(user)
        db.commit()
        db.refresh(user)

        return user

    def authenticate(
        self,
        db: Session,
        email: str,
        password: str,
    ) -> User | None:

        user = self.get_by_email(
            db,
            email,
        )

        if not user:
            return None

        if not verify_password(
            password,
            user.password_hash,
        ):
            return None

        return user