#!/bin/bash
source ./buildlib.sh

pushd server && npm install
check_code $?
popd
pushd client && npm install
check_code $?
popd
npm install -g aurelia-cli
check_code $?
