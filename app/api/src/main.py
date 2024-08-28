from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from cv import router as cv_router
from utils import router as utils_router


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(cv_router.router)
app.include_router(utils_router.router)


@app.get("/")
async def hello():
    return {"message": "Hello World! From FastAPI!!!"}


if __name__ == '__main__':
    uvicorn.run(
        "main:app",
        host='0.0.0.0',
        port=8080,
        reload=True,
        access_log=True
    )
