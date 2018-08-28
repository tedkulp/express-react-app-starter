# Create React App & Express Starter

This is a starter project for creating a simple frontend/backend app w/ Express and React/Redux.

It makes a lot of assumptions as far as development environment:

* You're using docker and docker-compse in a docker-machine setup.
* You have node and yarn already setup and installed.
* It was created and used on a Mac, and I'm not sure if it will work in other environments or not.
* You want to use Mongodb and Redis, though I may create an override for Postgres and Redis.

The backend side is using a fixed set of packages. The frontend, however, does a fresh `yarn add` of all required
packages because everything is moving so fast at the moment.

## Setup

Run the setup.sh script. This will 

```bash
git clone https://github.com/tedkulp/express-create-react-app-starter.git my-project
cd my-project
./setup.sh
docker-compose build --pull
```

This will do a yarn install to get create-react-app, create the frontend, and then yarn install
all the packages for the frontend as well. It will also build all the initial docker containers
and make sure everything is ready to go for the first run.

## Running

In the root directory, run `yarn dev`. This will start the docker containers with docker-compose
and also start another instance of the frontend so that code can be hot reloaded.

## Deployment

TODO
