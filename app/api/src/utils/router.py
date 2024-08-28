from fastapi import APIRouter, Depends
from fastapi.security import HTTPBasic, HTTPBasicCredentials

from .scraper.coindata import CoinData


router = APIRouter(
    prefix="/utils",
)

security = HTTPBasic()


# as this endpoint starts the scraping script requiring some time,
# sets a dummy basic credential for backend verification before execution
@router.get("/coindata")
def fetch_coindata(_: HTTPBasicCredentials = Depends(security)):
    coindata = CoinData()
    return coindata.return_jsondata()
