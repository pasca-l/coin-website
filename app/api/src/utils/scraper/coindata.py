import base64
import datetime
import json

import bs4
import requests


class CoinData:
    def __init__(self):
        self.data = []
        self.logfile = "./utils/scraper/error.log"

    def _request_image_from_url(self, url):
        try:
            response = requests.get(url)
            response.raise_for_status()
        except:
            message = f"Error in fetching image from: {url}"
            with open(self.logfile, mode="a") as f:
                f.write(f"{datetime.datetime.now()}: {message}\n")
            return ""

        # convert bytes into base64 encoding, for json.dump to work
        encoding = base64.b64encode(response.content).decode('utf-8')
        return encoding

    def _request_coindata(self):
        try:
            url = "https://www.coin-database.com/series/eurozone-commemorative-2-euro-coins-2-euro.html"
            response = requests.get(url)
            soup = bs4.BeautifulSoup(response.content, 'html.parser')
        except:
            raise Exception(f"Error in fetching coin data from: {url}")

        table = soup.find(class_="galerka")
        for elem in table.find_all("td"):
            try:
                year = elem.find("h2").text
                country = elem.find("h2").find("a").get("title") \
                        .replace("Coins from ", "")
                name = elem.find("h3").find("a").text
                # "IMAGE-v.jpg" contains a bigger image than "IMAGE.jpg"
                img_url = 'https://www.coin-database.com' \
                        + elem.find("img").get("src").replace(".jpg", "-v.jpg")
            except:
                continue
            else:
                self.data.append(
                    {
                        'name': name,
                        'country': country,
                        'year': year,
                        'url': img_url,
                    }
                )

    def add_item(self, add_dict):
        for idx in range(len(self.data)):
            self.data[idx] |= add_dict

    def remove_item(self, remove_key):
        for idx in range(len(self.data)):
            self.data[idx].pop(remove_key)

    def generate_ts_content(self, var):
        self._request_coindata()
        ts_content = f"export const {var} = {self.data};"
        return ts_content

    def return_jsondata(self):
        self._request_coindata()
        return json.dumps(self.data, ensure_ascii=False)
