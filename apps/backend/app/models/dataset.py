from datetime import datetime
from enum import Enum

from sqlalchemy import (
    DateTime,
    Enum as SqlEnum,
    ForeignKey,
    Integer,
    String,
    Float,
    JSON,
    Text,
    func,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.session import Base


class DatasetStatus(str, Enum):
    UPLOADED = "UPLOADED"
    PROCESSING = "PROCESSING"
    ANALYZED = "ANALYZED"
    FAILED = "FAILED"


class Dataset(Base):
    __tablename__ = "datasets"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
    )

    name: Mapped[str] = mapped_column(
        String(255),
    )

    original_filename: Mapped[str] = mapped_column(
        String(255),
    )

    file_type: Mapped[str] = mapped_column(
        String(30),
    )

    file_size: Mapped[int] = mapped_column(
        Integer,
    )

    storage_path: Mapped[str] = mapped_column(
        String(500),
    )

    mission: Mapped[str] = mapped_column(
        String(100),
    )

    status: Mapped[DatasetStatus] = mapped_column(
    SqlEnum(DatasetStatus),
    default=DatasetStatus.UPLOADED,
    )

    rows: Mapped[int | None] = mapped_column(
    Integer,
    nullable=True,
    )

    columns: Mapped[int | None] = mapped_column(
    Integer,
    nullable=True,
    )

    preview: Mapped[list | None] = mapped_column(
    JSON,
    nullable=True,
    )

    analysis: Mapped[dict | None] = mapped_column(
    JSON,
    nullable=True,
    )

    preprocessing: Mapped[dict | None] = mapped_column(
    JSON,
    nullable=True,
    )

    plot: Mapped[str | None] = mapped_column(
    Text,
    nullable=True,
    )

    candidate_count: Mapped[int | None] = mapped_column(
    Integer,
    nullable=True,
    )

    confidence: Mapped[float | None] = mapped_column(
    Float,
    nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
    DateTime(timezone=True),
    server_default=func.now(),
    )

    

    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    owner = relationship(
        "User",
        back_populates="datasets",
    )