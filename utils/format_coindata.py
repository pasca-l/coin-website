import json


class Formatter:
    def __init__(self):
        self.data_path = '../src/prisma/coin_data.json'
        self.json_data = json.load(open(self.data_path, 'r'))

    def add_item(self, add_dict):
        for idx in range(len(self.json_data['coins'])):
            self.json_data['coins'][idx] |= add_dict

        with open(self.data_path, 'w', encoding="utf-8") as f:
            json.dump(self.json_data, f, ensure_ascii=False)

    def remove_item(self, remove_key):
        for idx in range(len(self.json_data['coins'])):
            self.json_data['coins'][idx].pop(remove_key)

        with open(self.data_path, 'w', encoding="utf-8") as f:
            json.dump(self.json_data, f, ensure_ascii=False)

    def generate_ts(self, var):
        ts_content = f"export const {var} = {self.json_data['coins']};"

        with open(self.data_path.replace(".json", ".ts"), 'w') as f:
            f.write(ts_content)


def main():
    formatter = Formatter()
    formatter.add_item({'isCollected': 0})


if __name__ == '__main__':
    main()
