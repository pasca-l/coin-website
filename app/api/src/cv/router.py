from fastapi import APIRouter
from pydantic import BaseModel

from .processor.detector import CoinDetector


router = APIRouter(
    prefix="/cv",
)


class EncodedImage(BaseModel):
    content: str


@router.post("/circles")
async def find_circles(img: EncodedImage):
    processor = CoinDetector(img)
    return f"{processor.annotate_circles()}"
