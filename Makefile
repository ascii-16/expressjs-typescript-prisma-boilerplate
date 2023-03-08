#!/bin/bash
TEST_TARGET := e2e integration unit

.PHONY: build test module prisma

setup:
	@echo "\n✅ Installed dependencies\n"
	cp .env.example .env
	@bash scripts/create-env.sh
	@echo "\n✅ Created env file\n"
prisma:
	npm run prisma:generate
	@echo "✅ Generated prisma types\n"
	npm run prisma:migrate
	@echo "✅ Migrated db"
dev:
	@echo "🚀 Starting to run app in dev mode"
	npm run dev
build:
	@echo "🚀 Starting to build app\n"
	npm run build
	@echo "✅ Build completed"
prod:
	@echo "🚀 Starting to run app in production mode"
	npm run prod
test:
	@bash scripts/run-test.sh
module:
	@bash scripts/create-module.sh
env:
	@bash scripts/create-env.sh
	
