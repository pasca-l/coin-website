from fastapi import APIRouter

from .dataloader.coindata import CoinData


router = APIRouter(
    prefix="/utils",
)


@router.get("/coindata")
def main():
    coindata = CoinData()
    # coindata.add_item({'isCollected': 0})
    return coindata.return_jsondata()
