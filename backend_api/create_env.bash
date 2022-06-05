#!/bin/bash

#use with source create_env.bash
python3 -m pip install virtualenv
python3 -m virtualenv venv
source "venv/bin/activate"
pip install -r requirements.txt
python3 manage.py runserver