import { PrismaClient, type users } from '@prisma/client';
import request from 'supertest';
import { type ApiResponse } from '../../types/util-types';
import app from '../../../src/app';

const createUserBody = {
  name: 'John',
  phone: '+99999999999999',
  email: 'john@example.com',
};

describe('[e2e]:/api/users', () => {
  const prismaClient = new PrismaClient();
  const { name, email, phone } = createUserBody;

  beforeAll(async () => {
    await prismaClient.$connect();
  });

  afterAll(async () => {
    await prismaClient.users.deleteMany({
      where: {
        AND: [{ name, email }],
      },
    });
    await prismaClient.$disconnect();
  });

  test('POST: /create - should create a user', async () => {
    jest.resetModules();
    jest.mock('../../../src/app');

    const response = await request(app)
      .post('/api/v1/local/users/create')
      .set('Accept', 'application/json')
      .send(createUserBody);

    const { data } = response.body as ApiResponse<users>;
    expect(data.name).toBe(name);
    expect(data.email).toBe(email);
    expect(data.phone).toBe(phone);
  });
});
