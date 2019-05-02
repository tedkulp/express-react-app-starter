FROM node

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json .
COPY package-lock.json .

RUN npm install

ADD . /myapp

CMD ["npm", "run", "start"]

EXPOSE 3000
