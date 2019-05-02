FROM node

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json .
COPY package-lock.json .

RUN npm install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm run build

# Set the command to start the node server.
CMD ["./node_modules/.bin/serve", "-s", "dist"]

# Tell Docker about the port we'll run on.
EXPOSE 5000
