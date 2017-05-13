#!/bin/bash
source ./buildlib.sh

pushd server
npm run all
check_code $?
popd

pushd client
echo "export default {version: '$TRAVIS_COMMIT'};" > src/build-info.js
au build
check_code $?
au test
check_code $?
au build --env prod
check_code $?
popd
