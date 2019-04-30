#!/bin/bash

JWT_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc a-zA-Z0-9 | head -c 80)
sed "s/REPLACE_ME/$JWT_KEY/" docker-compose.yaml.in > docker-compose.yaml

npm install

cd backend
npm install
cd ..

cd frontend
npm install
cd ..
