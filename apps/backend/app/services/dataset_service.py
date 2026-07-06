from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.dataset import Dataset, DatasetStatus
from app.repositories.dataset_repository import DatasetRepository


class DatasetService:

    def __init__(self):
        self.repository = DatasetRepository()

    def create(
        self,
        db: Session,
        *,
        user_id: int,
        name: str,
        mission: str,
        saved_file: dict,
    ):
        dataset = Dataset(
            user_id=user_id,
            name=name,
            original_filename=saved_file["filename"],
            file_type=saved_file["extension"],
            file_size=saved_file["size"],
            storage_path=saved_file["path"],
            mission=mission,
            status=DatasetStatus.UPLOADED,
        )

        return self.repository.create(
            db,
            dataset,
        )

    def get_all(
        self,
        db: Session,
    ):
        return self.repository.get_all(db)

    def get_by_id(
        self,
        db: Session,
        dataset_id: int,
    ):
        dataset = self.repository.get_by_id(
            db,
            dataset_id,
        )

        if not dataset:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Dataset not found.",
            )

        return dataset

    def delete(
        self,
        db: Session,
        dataset_id: int,
    ):
        dataset = self.get_by_id(
            db,
            dataset_id,
        )

        self.repository.delete(
            db,
            dataset,
        )

        return {
            "message": "Dataset deleted successfully."
        }