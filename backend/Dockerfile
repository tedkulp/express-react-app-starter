FROM node

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json .
COPY package-lock.json .

RUN npm install

ADD . /myapp

CMD ["yarn", "start"]

EXPOSE 3000
