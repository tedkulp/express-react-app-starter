#!/bin/bash

MONGO_HOST=${DOCKER_MONGODB_HOST:-mongo}
REDIS_HOST=${DOCKER_REDIS_HOST:-redis}

echo "--> $MONGO_HOST $REDIS_HOST <--"

set -eu pipefail

echo "Attempting to connect to mongodb"
until $(nc -zv $MONGO_HOST 27017); do
    printf '.'
    sleep 5
done
echo "Attempting to connect to redis"
until $(nc -zv $REDIS_HOST 6379); do
    printf '.'
    sleep 5
done
echo "Was able to connect to all"

exit 0
