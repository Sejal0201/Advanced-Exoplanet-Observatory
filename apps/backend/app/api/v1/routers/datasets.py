from fastapi import (
    APIRouter,
    Depends,
    File,
    Form,
    UploadFile,
)
from sqlalchemy.orm import Session
from app.models.dataset import DatasetStatus

from app.db.session import get_db
from app.utils.file_upload import save_dataset
from app.utils.dataset_parser import parse_dataset
from app.services.transit_detection_service import (
    TransitDetectionService,
)
from app.services.visualization_service import (
    VisualizationService,
)
from app.services.preprocessing_service import PreprocessingService
from app.services.lightcurve_service import LightCurveService
from app.schemas.dataset import DatasetResponse
from app.services.dataset_service import DatasetService

from sqlalchemy import JSON, Float, Text

service = DatasetService()
preprocessor = PreprocessingService()
lightcurve = LightCurveService()
visualization = VisualizationService()

transit_detector = TransitDetectionService()

router = APIRouter(
    prefix="/datasets",
    tags=["Datasets"],
)


@router.post("/upload")
def upload_dataset(
    file: UploadFile = File(...),
    mission: str = Form(...),
    name: str = Form(...),
    db: Session = Depends(get_db),
):
    saved = save_dataset(
        user_id=1,
        file=file,
    )
    dataset = service.create(
    db=db,
    user_id=1,
    name=name,
    mission=mission,
    saved_file=saved,
    )
    parsed = parse_dataset(
        saved["path"],
    )

    cleaned_df, preprocessing = preprocessor.preprocess(
        parsed["dataframe"],
    )

    analysis = lightcurve.analyze(
        cleaned_df,
    )
    

    transits = transit_detector.detect(
    cleaned_df,
    )

    plot = visualization.create_lightcurve(
    cleaned_df,
    transits,
    name,
    )
    dataset.rows = len(cleaned_df)
    dataset.columns = len(cleaned_df.columns)
    dataset.preview = parsed["metadata"]["preview"]
    dataset.preprocessing = preprocessing
    dataset.analysis = analysis
    dataset.plot = plot
    dataset.candidate_count = transits["candidate_count"]
    dataset.confidence = transits["confidence"]
    dataset.status = DatasetStatus.ANALYZED
    db.commit()
    db.refresh(dataset)
    return {
        "message": "Dataset uploaded successfully",
        "dataset_id": dataset.id,
        "mission": mission,
        "name": name,
        "metadata": parsed["metadata"],
        "preprocessing": preprocessing,
        "analysis": analysis,
        "transits": transits,
        "plot": plot,   
    }

    # return dataset

@router.get(
    "",
    response_model=list[DatasetResponse],
)
def get_datasets(
    db: Session = Depends(get_db),
):
    return service.get_all(db)

@router.get(
    "/{dataset_id}",
    response_model=DatasetResponse,
)
def get_dataset(
    dataset_id: int,
    db: Session = Depends(get_db),
):
    return service.get_by_id(
        db,
        dataset_id,
    )

@router.delete(
    "/{dataset_id}",
)
def delete_dataset(
    dataset_id: int,
    db: Session = Depends(get_db),
):
    return service.delete(
        db,
        dataset_id,
    )