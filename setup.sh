#!/bin/bash

yarn install

if [ ! -d "frontend" ]; then
    ./node_modules/.bin/create-react-app frontend
    cp ./Dockerfile.frontend ./frontend/Dockerfile
fi

cd frontend
yarn add axios bluebird bootstrap final-form font-awesome
yarn add lodash moment popper.js prop-types reactdom react-final-form
yarn add react-redux react-router-dom react-router-redux reactstrap
yarn add redux redux-logger redux-thunk redux-saga serve
cd ..
