#!/bin/bash
source ./buildlib.sh

mkdir -p deploy/client
cp -r server/* deploy/
cp client/index.html deploy/client/
cp client/favicon.ico deploy/client/
cp -r client/scripts deploy/client/scripts
cp -r client/bootstrap deploy/client/bootstrap
rm -rf deploy/node_modules
rm -rf deploy/spec
pushd deploy
zip -r ../artifact.zip *
popd
