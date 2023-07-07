import json
import requests
import bs4


class CoinData:
    def __init__(self):
        self.data = {'coins': []}
        self._request_coindata()

    def _request_coindata(self):
        try:
            url = "https://www.coin-database.com/series/eurozone-commemorative-2-euro-coins-2-euro.html"
            request = requests.get(url)
            soup = bs4.BeautifulSoup(request.content, 'html.parser')
        except:
            raise Exception("Error in fetching coin data from URL.")

        table = soup.find(class_="galerka")
        for elem in table.find_all("td"):
            try:
                year = elem.find("h2").text
                country = elem.find("h2").find("a").get("title") \
                        .replace("Coins from ", "")
                name = elem.find("h3").find("a").text
                img_url = 'https://www.coin-database.com' \
                        + elem.find("img").get("src").replace(".jpg", "-v.jpg")
                # img_uid = str(uuid.uuid4())
            except:
                continue
            else:
                self.data['coins'].append(
                    {
                        'name': name,
                        'country': country,
                        'year': year,
                        'url': img_url,
                    }
                )

    def add_item(self, add_dict):
        for idx in range(len(self.data['coins'])):
            self.data['coins'][idx] |= add_dict

    def remove_item(self, remove_key):
        for idx in range(len(self.data['coins'])):
            self.data['coins'][idx].pop(remove_key)

    def generate_ts_content(self, var):
        ts_content = f"export const {var} = {self.data['coins']};"
        return ts_content

    def return_jsondata(self):
        return json.dumps(self.data, ensure_ascii=False)
