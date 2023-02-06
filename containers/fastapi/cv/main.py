import base64
from fastapi import FastAPI
import numpy as np
import cv2


app = FastAPI()

@app.get("/")
async def hello():
    return {"message": "Hello World! From FastAPI!"}


@app.get("/img")
async def process():
    with open('encode.txt', 'r') as f:
        img_base64 = f.read().split(',')[-1]

    img_binary = base64.b64decode(img_base64)
    jpg = np.frombuffer(img_binary, dtype=np.uint8)
    img = cv2.imdecode(jpg, cv2.IMREAD_COLOR)
    cv2.imwrite("decoded.jpg", img)

    _, encoded = cv2.imencode(".jpg", img)
    img_str = base64.b64encode(encoded).decode("ascii")

    return img_str
    # return f'<img src="data:image/jpeg;base64,{img_str}">'
