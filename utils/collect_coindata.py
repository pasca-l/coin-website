import os
import shutil
import uuid
import time
from tqdm import tqdm
import json
import requests
import bs4


def main():
    image_dir = '../src/public/images/'
    shutil.rmtree(image_dir)
    os.makedirs(image_dir, exist_ok=True)

    url = 'https://www.coin-database.com/series/eurozone-commemorative-2-euro-coins-2-euro.html'
    request =  requests.get(url)
    soup = bs4.BeautifulSoup(request.content, 'html.parser')

    data = {'coins': []}
    table = soup.find(class_="galerka")
    for elem in tqdm(table.find_all("td")):
        # fetch information from html
        try:
            year = elem.find("h2").text
            country = elem.find("h2").find("a").get("title") \
                    .replace("Coins from ", "")
            name = elem.find("h3").find("a").text
            img_url = 'https://www.coin-database.com' \
                    + elem.find("img").get("src").replace(".jpg", "-v.jpg")
            img_uid = str(uuid.uuid4())
        except:
            continue

        # download image
        request = requests.get(img_url)
        with open(image_dir + img_uid + ".jpg", 'wb') as f:
            f.write(request.content)
        time.sleep(0.5)

        # data to put as json
        data_dict = {
            'uid': img_uid,
            'url': img_url,
            'year': year,
            'country': country,
            'name': name
        }
        data['coins'].append(data_dict)

    save_path = '../src/public/coin_data.json'
    with open(save_path, 'w', encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)


if __name__ == '__main__':
    main()
