#!make
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