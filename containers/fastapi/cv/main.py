import base64
from fastapi import FastAPI
import numpy as np
import cv2


app = FastAPI()


@app.get("/")
async def hello():
    return [{"message": "Hello World! From FastAPI!!!"}]


@app.post("/img")
async def process(data):
    with open("test.txt", 'w') as f:
        f.write(f"{data}")

    return {data: "POST success!!!"}

    img_base64 = data.split(',')[-1]

    # with open('encode.txt', 'r') as f:
    #     img_base64 = f.read().split(',')[-1]

    img_binary = base64.b64decode(img_base64)
    jpg = np.frombuffer(img_binary, dtype=np.uint8)
    img = cv2.imdecode(jpg, cv2.IMREAD_COLOR)

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    circles = cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, dp=1.5, minDist=10,
                               param1=100, param2=60)
    if len(circles) == 1:
        circles = np.uint16(np.around(circles))
        for c in circles[0]:
            cv2.circle(img, center=(c[0], c[1]), radius=c[2], color=(255, 0, 0),
                       thickness=3)
            cv2.circle(img, center=(c[0], c[1]), radius=2, color=(0, 255, 0),
                       thickness=1)
    # else:
    #     return {"data": None}
    # cv2.imwrite("decoded.jpg", img)

    _, encoded = cv2.imencode(".jpg", img)
    img_str = base64.b64encode(encoded).decode("ascii")

    # img_str should be used in img tags as:
    # <img src=`data:image/jpeg;base64,${img_str}`>
    return {"data": img_str}
