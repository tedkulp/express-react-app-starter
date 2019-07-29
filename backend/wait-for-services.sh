#!/bin/bash

# DOCKER_HOST=$(docker-machine ip)
# DOCKER_HOST="127.0.0.1"
# MONGO_HOST=${1:-mongo}
# REDIS_HOST=${2:-redis}

# echo "$1 $2"

set -eu pipefail

echo "Attempting to connect to mongodb"
until $(nc -zv mongo 27017); do
    printf '.'
    sleep 5
done
echo "Attempting to connect to redis"
until $(nc -zv redis 6379); do
    printf '.'
    sleep 5
done
echo "Was able to connect to all"

exit 0
