from fastapi import APIRouter

from app.api.v1.endpoints import health
from app.api.v1.routers import users
from app.api.v1.routers import datasets
from app.api.v1.routers import dashboard

api_router = APIRouter()

api_router.include_router(health.router)

api_router.include_router(users.router)

api_router.include_router(datasets.router)

api_router.include_router(
    dashboard.router
)