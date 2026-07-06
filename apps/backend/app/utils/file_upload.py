import os
import shutil
from pathlib import Path

from fastapi import HTTPException, UploadFile

from app.constants.file_constants import (
    ALLOWED_EXTENSIONS,
    MAX_FILE_SIZE,
)


def save_dataset(
    user_id: int,
    file: UploadFile,
):
    extension = Path(file.filename).suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Unsupported file type.",
        )

    file.file.seek(0, os.SEEK_END)
    size = file.file.tell()
    file.file.seek(0)

    if size > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail="File exceeds 100 MB.",
        )

    upload_dir = Path("uploads") / "datasets" / f"user_{user_id}"
    upload_dir.mkdir(parents=True, exist_ok=True)

    destination = upload_dir / file.filename

    with destination.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "filename": file.filename,
        "path": str(destination),
        # "size": size,
        # "extension": extension,
        "size": destination.stat().st_size,
        "type": destination.suffix.lower(),
    }