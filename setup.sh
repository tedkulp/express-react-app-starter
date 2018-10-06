#!/bin/bash

yarn install

cd backend
yarn install
cd ..

if [ ! -d "frontend" ]; then
    npx create-react-app frontend
    cp ./Dockerfile.frontend ./frontend/Dockerfile
fi

cd frontend

yarn add axios bluebird jquery bootstrap final-form font-awesome
yarn add lodash moment node-sass popper.js prop-types reactdom react-final-form
yarn add react-redux react-router react-router-dom connected-react-router reactstrap
yarn add redux redux-logger redux-thunk redux-saga serve
yarn add socketio-wildcard socket.io-client

cd src

cp -R ../../frontend-src/* .

cd ../..
