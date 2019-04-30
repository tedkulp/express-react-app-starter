#!/bin/sh

cp .gitignore.post .gitignore

rm -fr .git
rm .gitignore.post
rm cleanup.sh
rm docker-compose.yaml.in
rm setup.sh

git init
git add .
git commit -m "Initial commit"
