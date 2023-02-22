import { type users } from '@prisma/client';
import prisma from '@/lib/prisma';

export default class UserService {
  public async createUser(data: users) {
    const user = await prisma.users.create({ data });
    return user;
  }
}
