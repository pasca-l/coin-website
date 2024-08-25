from fastapi import APIRouter
from pydantic import BaseModel

from .processor import ImageProcessor


router = APIRouter(
    prefix="/img",
)


class Data(BaseModel):
    data: str


@router.post("/circles")
async def find_circles(data: Data):
    processor = ImageProcessor(data)
    return f"{processor.annotate_circles()}"


@router.get("/circles")
def test():
    processor = ImageProcessor("skjdf")
    return f"{processor.annotate_circles()}"
