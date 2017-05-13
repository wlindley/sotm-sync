#!/bin/bash
source ./buildlib.sh

mkdir -p deploy/client
rsync -av --exclude='spec' --exclude='node_modules' --exclude='coverage' --exclude='npm-debug.log' server/ deploy/
cp client/index.html deploy/client/
cp client/favicon.ico deploy/client/
cp -r client/scripts deploy/client/scripts
cp -r client/bootstrap deploy/client/bootstrap
pushd deploy
zip -r ../artifact.zip *
popd
