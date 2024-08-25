from fastapi import APIRouter

from .dataloader.coindata import CoinData


router = APIRouter(
    prefix="/utils",
)


@router.get("/coindata")
def fetch_coindata():
    coindata = CoinData()
    # coindata.add_item({'isCollected': 0})
    return coindata.return_jsondata()
