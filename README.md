# Create React App & Express Starter

This is a starter project for creating a simple frontend/backend app w/ Express and React/Redux.

It makes a lot of assumptions as far as development environment:

* You're using docker and docker-compse in a docker-machine setup.
* You have node already setup and installed.
* It was created and used on a Mac, and I'm not sure if it will work in other environments or not.
* You want to use Mongodb and Redis, though I may create an override for Postgres and Redis.

## Setup

To set it up, do the following:

```bash
git clone https://github.com/tedkulp/express-create-react-app-starter.git my-project
cd my-project
./setup.sh
docker-compose build --pull
```

This will do an npm install to get create-react-app, create the frontend, and then npm install
all the packages for the frontend as well. It will also build all the initial docker containers
and make sure everything is ready to go for the first run.

When you're happy with how it works, run `./cleanup.sh` to remove all of the setup files
and start a new git repository.

## Running

In the root directory, run `npm run dev`. This will start the docker containers with docker-compose
and also start another instance of the frontend so that code can be hot reloaded.

## Deployment

TODO
