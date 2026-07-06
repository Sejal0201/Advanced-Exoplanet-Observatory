# from sqlalchemy import func
# from sqlalchemy.orm import Session
# from app.models.dataset import Dataset, DatasetStatus




# class DashboardRepository:

#     def get_stats(
#         self,
#         db: Session,
#     ):
#         total = db.query(
#             func.count(Dataset.id)
#         ).scalar()

#     processed = (
#     db.query(Dataset)
#     .filter(Dataset.status == DatasetStatus.ANALYZED)
#     .count()
# )

# pending = (
#     db.query(Dataset)
#     .filter(Dataset.status == DatasetStatus.PROCESSING)
#     .count()
# )

#     reports = 0
#     candidates = 0
#         return {
#             "datasets": total,
#             "processed": processed,
#             "pending": pending,
#             "reports": reports,
#             "transit_candidates": candidates,
#         }

from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.dataset import Dataset, DatasetStatus


class DashboardRepository:

    def get_stats(
        self,
        db: Session,
    ):
        total = db.query(
            func.count(Dataset.id)
        ).scalar()

        processed = (
            db.query(Dataset)
            .filter(
                Dataset.status == DatasetStatus.ANALYZED
            )
            .count()
        )

        pending = (
            db.query(Dataset)
            .filter(
                Dataset.status == DatasetStatus.PROCESSING
            )
            .count()
        )

        reports = 0

        candidates = 0

        return {
            "datasets": total,
            "processed": processed,
            "pending": pending,
            "reports": reports,
            "transit_candidates": candidates,
        }   