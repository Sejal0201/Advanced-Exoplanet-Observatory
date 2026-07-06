from app.repositories.dashboard_repository import (
    DashboardRepository,
)


class DashboardService:

    def __init__(self):
        self.repository = DashboardRepository()

    def get_stats(
        self,
        db,
    ):
        return self.repository.get_stats(db)