# from pydantic import BaseModel


# class DatasetResponse(BaseModel):
#     id: int

#     name: str

#     original_filename: str

#     file_type: str

#     file_size: int

#     mission: str


from datetime import datetime
from typing import Any

from pydantic import BaseModel


class DatasetResponse(BaseModel):
    id: int
    name: str
    mission: str
    status: str

    rows: int | None = None
    columns: int | None = None

    preview: list[dict[str, Any]] | None = None

    preprocessing: dict[str, Any] | None = None

    analysis: dict[str, Any] | None = None

    plot: str | None = None

    candidate_count: int | None = None

    confidence: float | None = None

    created_at: datetime

    model_config = {
        "from_attributes": True,
    }