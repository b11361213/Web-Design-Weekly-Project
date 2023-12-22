from pymongo import MongoClient
client = MongoClient('mongodb://localhost:27017')
db = client['instance']
id_collection = db['id']

def fetch():
    fetch_id = id_collection.find()
    print("ID fetch:")
    for id in fetch_id:
        print(id)

def insert():
    print("insert data")
    data_dict = { "num": 3, "index": "eh", "comment": "11361213黃友定"}
    _ = id_collection.insert_one(data_dict)

fetch()

insert()

fetch()