import { type users } from '@prisma/client';
import request from 'supertest';
import { type ApiResponse } from '../../types/util-types';
import app from '../../../src/app';
import prismaClient from '../../../src/lib/prisma';
import { createUserBody } from '../../data/user';

/**
 * Integration testing is a type of software testing that focuses on testing
 * the interactions between different parts or components of a software application.
 * The goal of integration testing is to ensure that the different parts of the application
 * work together as expected and that they integrate seamlessly with each other.
 *
 * @ref https://en.wikipedia.org/wiki/Integration_testing
 */

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

test('[Integration] - POST: /users/create', async () => {
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
