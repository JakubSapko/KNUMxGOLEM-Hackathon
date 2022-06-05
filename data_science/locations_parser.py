import pandas as pd
import matplotlib.pyplot as plt
from itertools import dropwhile, takewhile
import numpy as np 


'''districts and cities'''
df_districts = pd.read_csv('districts.csv')
    
df_cities = pd.read_csv('cities.csv')

df_regions = pd.DataFrame({ "id": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], "name_pl": ['Mazowieckie','Kujawsko-Pomorskie','Lubelskie','Lubuskie','Łódzkie','Małopolskie', 'Dolnośląskie','Opolskie','Podkarpacie','Podlaskie', 'Pomorskie', 'Śląskie','Świętokrzyskie','Warmińsko-Mazurskie','Wielkopolskie', 'Zachodniopomorskie'], "lon_region": [17.0367, 18.6105,22.5526,15.2403,19.4318,19.9308, 21.0082, 17.9193,22.0095,23.17,18.6299,19.0228, 20.628,20.477,16.9335,14.5152], "lat_region": [51.102, 53.0072,51.2396,52.7292,51.7595, 50.0757, 52.2361,50.6699,50.0415,53.1299,54.2827,50.2629,50.8706,53.776,52.4083,53.3937] })
  

'''selecting'''
fields = ["district_id", "city_id", "region_id"]

df_locations = pd.read_csv('train.csv', usecols=fields)
df_locations = df_locations.drop_duplicates()
df_locations.replace(np.nan,0)

df_locations = pd.merge(df_locations, df_cities, how='left', left_on='city_id', right_on='id', suffixes=("", "_city"))
df_locations.drop('id', inplace=True, axis=1)
df_locations.rename({ "name_pl": "city_name" }, inplace=True, axis=1)

df_locations = pd.merge(df_locations, df_districts, how='left', left_on='district_id', right_on='id', suffixes=("_city", "_district"))
df_locations.drop('id', inplace=True, axis=1)
df_locations.rename({ "name_pl": "district_name" }, inplace=True, axis=1)

df_locations = pd.merge(df_locations, df_regions, how='left', left_on='region_id', right_on='id', suffixes=("_district", "_region"))
df_locations.drop('id', inplace=True, axis=1)
df_locations.rename({ "name_pl": "region_name" }, inplace=True, axis=1)

df_locations['id'] = df_locations.index + 1


