#!make
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
	if [ -z "$(target)" ]; then \
		echo "🚀 Running tests"; \
		npm run test; \
	else \
		echo "🚀 Running $(target) tests"; \
		npm run test:$(target); \
	fi
