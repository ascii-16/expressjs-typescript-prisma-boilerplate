#!/bin/bash
TEST_TARGET := e2e integration unit

.SILENT: test

setup:
	npm i
	@echo "\n✅ Installed dependencies\n"
	cp .env.example .env
	@echo "\n✅ Created env file\n"
	@echo "Replace the variables in env file with your credentials\n\nThen run:: make prisma\n"
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
	@echo "Enter test type\na: All\ne: e2e\ni: integration\nu: unit\nEnter a choice:"; \
	read target; \
	if [ "$$target" = "a" ]; then \
		echo "🚀 Running tests"; \
		npm run test; \
	else \
		if [ "$$target" = "e" ]; then \
			echo "🚀 Running e2e tests"; \
			npm run test:e2e; \
		elif [ "$$target" = "i" ]; then \
			echo "🚀 Running integration tests"; \
			npm run test:integration; \
		elif [ "$$target" = "u" ]; then \
			echo "🚀 Running unit tests"; \
			npm run test:unit; \
		fi \
	fi
module:
	@echo "Module name? "; \
	read module_name; \
	mkdir -p src/modules/$$module_name; \
	echo "✅ Created module folder"; \
	cd src/modules/$$module_name; \
	touch $$module_name.controller.ts $$module_name.service.ts $$module_name.routes.ts; \
	echo "✅ Created controller, service, and routes"
	