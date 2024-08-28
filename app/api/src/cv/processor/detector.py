import base64

import cv2
import numpy as np


class CoinDetector:
    def __init__(self, data, to_tag=False):
        self.img = self._base64_to_img(data)
        self.to_tag = to_tag

    def _base64_to_img(self, data):
        img_binary = base64.b64decode(
            data.split(',')[-1]
        )
        img = cv2.imdecode(
            np.frombuffer(img_binary, dtype=np.uint8), 
            cv2.IMREAD_COLOR
        )
        return img

    def _img_to_base64(self, img):
        _, encoded = cv2.imencode(".jpg", img)
        img_base64 = base64.b64encode(encoded).decode("ascii")

        if self.to_tag:
            # <img src=`data:image/jpeg;base64,${img_str}`>, to use in tag
            return f"data:image/jpeg;base64,{img_base64}"
        else:
            return img_base64

    def annotate_circles(self):
        gray = cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        canvas = self.img.copy()

        circles = cv2.HoughCircles(
            gray,
            cv2.HOUGH_GRADIENT,
            dp=1.5,
            minDist=10,
            param1=100,
            param2=60
        )
        if len(circles) == 1:
            circles = np.uint16(np.around(circles))
            for c in circles[0]:
                cv2.circle(
                    canvas,
                    center=(c[0], c[1]),
                    radius=c[2],
                    color=(255, 0, 0),
                    thickness=3
                )
                cv2.circle(
                    canvas,
                    center=(c[0], c[1]),
                    radius=2,
                    color=(0, 255, 0),
                    thickness=1
                )

        return self._img_to_base64(canvas)
