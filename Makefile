#!make
setup:
	npm i -g pnpm
	@echo "\n✅ Installed latest version of pnpm...\n"
	pnpm i
	@echo "\n✅ Installed dependencies\n"
	cp .env.example .env
	@echo "\n✅ Created env file\n"
	@echo "Replace the variables in env file with your credentials\n\nThen run:: make prisma\n"
prisma:
	pnpm run prisma:generate
	@echo "✅ Generated prisma types\n"
	pnpm run prisma:migrate
	@echo "✅ Migrated db"