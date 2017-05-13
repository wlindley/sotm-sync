#!/bin/bash
function check_code {
	local exitCode=$1
	if [ $exitCode -ne 0 ]; then
		exit $exitCode
	fi
}