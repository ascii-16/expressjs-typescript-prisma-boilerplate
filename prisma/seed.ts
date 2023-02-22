import { PrismaClient, type users } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const seedUsers = async () => {
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
  console.log(`Seed completed for user(${users.count})`);
};

async function seed() {
  await Promise.all([seedUsers()]);
}

const main = async () => {
  try {
    await seed();
    await prisma.$disconnect();
  } catch (e) {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
};

main();
