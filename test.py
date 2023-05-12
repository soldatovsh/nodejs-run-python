#!/bin/python3
import json
import random
import datetime

# generate a random number between 1 and 100
random_number = random.randint(1, 100)

# get the current date and time
current_date = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# create a dictionary with the random number and current date
data = {
    "random_number": random_number,
    "current_date": current_date
}

# convert the dictionary to JSON format
json_data = json.dumps(data)

# return the JSON data
print(json_data)