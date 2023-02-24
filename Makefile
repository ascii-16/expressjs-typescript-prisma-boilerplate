#!make
setup:
	echo 'Installing latest version of pnpm...'
	npm i -g pnpm
	echo 'Installing dependencies'
	pnpm i
	echo 'Creating env file'
	cp .env.example .env