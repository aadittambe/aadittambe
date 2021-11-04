import tweepy
from datetime import datetime
import pandas as pd
from datetime import datetime
from datetime import timedelta
from dateutil.parser import parse
import time
import json

def get_names():
    data = pd.read_csv('data_with_desc.csv')
    time_list = []
    for date in data["date_with_day"]:
        try:
            time_list.append(pd.to_datetime(date))
        except:
            time_list.append("unknown")
    data["time_list"]=time_list
    delete_rows = data[data['time_list'] == 'unknown'].index
    data.drop(delete_rows , inplace=True)
    data["datetime"]= pd.to_datetime(data['time_list'])
    data['month_day'] = data['datetime'].dt.strftime('%m-%d')
    today = datetime.today().strftime('%m-%d')
    data['datetime_year'] = data['datetime'].dt.strftime('%Y')
    today = datetime.today().strftime('%m-%d')
    strings = []
    for index, row in data.iterrows():
        if row["month_day"] == today:
            year_today = (int(datetime.today().strftime('%Y')))
            year_then = (int(row["datetime_year"]))
            diff = year_today - year_then
            if diff == 1:
                s = (row["fullName"] + " was killed " + str(diff) + " year ago, " + "on " + row["date_with_day"] + ", in "+ row["country"] + ".")
                strings.append(s)
            else:
                s = (row["fullName"] + " was killed " + str(diff) + " year ago, " + "on " + row["date_with_day"] + ", in "+ row["country"] + ".")
                strings.append(s)
    return strings

def tweet():
    for line in get_names():
        api.update_status(line)

print('success')


keys = {}
with open('keys.json', 'r') as f:
    keys = json.loads(f.read())
    consumer_key = keys["consumer_key"]
    consumer_secret = keys["consumer_secret"]
    key = keys["key"]
    secret = keys["secret"]

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(key, secret)

api = tweepy.API(auth)
tweet()
print("Tweet posted!")
