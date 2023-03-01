import { Router } from 'express';
import Controller from './users.controller';
import { CreateUserDto } from '@/dto/user.dto';
import RequestValidator from '@/middlewares/request-validator';
import { verifyAuthToken } from '@/middlewares/auth';

const users: Router = Router();
const controller = new Controller();

/**
 * Create user body
 * @typedef {object} CreateUserBody
 * @property {string} email.required - email of user
 * @property {string} name.required - name of user
 * @property {string} cognitoId.required - cognito id
 * @property {string} phone - phone number
 */
/**
 * User
 * @typedef {object} User
 * @property {string} email - email of user
 * @property {string} name - name of user
 * @property {string} cognitoId - cognito id
 * @property {string} phone - phone number
 */
/**
 * POST /users/create
 * @summary Create user
 * @tags users
 * @param {CreateUserBody} request.body.required
 * @return {User} 201 - user created
 */
users.post(
  '/create',
  verifyAuthToken,
  RequestValidator.validate(CreateUserDto),
  controller.createUser
);

export default users;
