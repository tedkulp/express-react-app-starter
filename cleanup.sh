#!/bin/sh

rm -fr .git
rm -fr setup.sh
rm -fr cleanup.sh

git init
git add .
git commit -m "Initial commit"
