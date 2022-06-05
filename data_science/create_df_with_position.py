#Task 4 - Time series

import pandas as pd
import matplotlib.pyplot as plt

fields = ["district_id", "city_id", "region_id"]

df = pd.read_csv('test.csv', skipinitialspace=True, names=fields)

df.drop_duplicates()

# =============================================================================
# def unique_columns(df,columns):
# 
#     result = pd.Series(index = df.index)
# 
#     
#     for name,group in df:
#        is_unique = len(group) == 1
#        result.loc[group.index] = is_unique
# 
#     assert not result.isnull().any()
# 
#     return result
# =============================================================================
