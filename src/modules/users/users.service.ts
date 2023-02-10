import { PrismaClient, users } from '@prisma/client';

const prisma = new PrismaClient();

export default class UserService {
  public async createUser(data: users) {
    const user = await prisma.users.create({ data });
    return user;
  }
}
