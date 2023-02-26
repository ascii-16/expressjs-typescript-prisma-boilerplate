import { type users } from '@prisma/client';
import request from 'supertest';
import { type ApiResponse } from '../../types/util-types';
import app from '../../../src/app';
import prismaClient from '../../../src/lib/prisma';
import { createUserBody } from '../../data/user';

/**
 * End-to-end (E2E) testing is a type of software testing that focuses on
 * testing the complete flow of a software application from start to finish.
 * The goal of E2E testing is to simulate real user scenarios and ensure that
 * the application works as expected in a real-world environment.
 *
 * @ref https://katalon.com/resources-center/blog/end-to-end-e2e-testing
 */

describe('[e2e] - sign up a user', () => {
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

  it('should create a new user', async () => {
    jest.resetModules();
    jest.mock('../../../src/app');

    const env = process.env.NODE_ENV;
    const response = await request(app)
      .post(`/api/v1/${env}/users/create`)
      .set('Accept', 'application/json')
      .send(createUserBody);

    const { data } = response.body as ApiResponse<users>;
    expect(data.name).toBe(name);
    expect(data.email).toBe(email);
    expect(data.phone).toBe(phone);
  });
});
