#!/bin/bash

echo -e "Enter test type
	\n\ra: All
	\re: e2e
	\ri: integration
	\ru: unit
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