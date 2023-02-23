import { PrismaClient, type users } from '@prisma/client';
import { faker } from '@faker-js/faker';
import logger from '../src/lib/logger';
import { HR } from '../src/utils/helper';

const prisma = new PrismaClient();
const seedUsers = async (): Promise<void> => {
  const fakeUsers = faker.helpers.uniqueArray<users>(
    () => ({
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    }),
    3
  );
  const users = await prisma.users.createMany({ data: fakeUsers });
  logger.info(`
    \rSeed completed for model: user
    \rcount: ${users.count}
    \r${HR('white', '-', 30)}
  `);
};

async function seed(): Promise<void> {
  await Promise.all([seedUsers()]);
}

async function main(): Promise<void> {
  try {
    await seed();
    await prisma.$disconnect();
  } catch (e) {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main().catch((e) => logger.error(e));
