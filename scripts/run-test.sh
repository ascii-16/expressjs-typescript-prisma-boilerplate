#!/bin/bash

GREEN='\033[00;32m'
WHITE_BOLD='\033[01;37m'

echo -e "${WHITE_BOLD}Enter test type
	\n\r› Press ${GREEN}a${WHITE_BOLD} to run all tests.
	\r› Press ${GREEN}e${WHITE_BOLD} to run e2e tests.
	\r› Press ${GREEN}i${WHITE_BOLD} to run integration tests.
	\r› Press ${GREEN}u${WHITE_BOLD} to run unit tests.
	\n\rEnter a choice:
";

read target;

if [ "$target" = "a" ]; then
	echo "🚀 Running all tests"
	npm run test
else
	if [ "$target" = "e" ]; then
		echo "🚀 Running e2e tests"
		npm run test:e2e
	elif [ "$target" = "i" ]; then
		echo "🚀 Running integration tests"
		npm run test:integration
	elif [ "$target" = "u" ]; then
		echo "🚀 Running unit tests"
		npm run test:unit
	fi
fi