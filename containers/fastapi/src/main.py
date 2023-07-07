from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from cv import process
from utils import data


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

app.include_router(process.router)
app.include_router(data.router)


@app.get("/")
async def hello():
    return {"message": "Hello World! From FastAPI!!!"}
