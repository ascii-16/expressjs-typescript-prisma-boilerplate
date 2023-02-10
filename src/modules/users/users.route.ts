import { Router } from 'express';
import { CreateUserDto } from '@/dto/user.dto';
import RequestValidator from '@/middlewares/request-validator';
import { verifyAuthToken } from '@/middlewares/auth';
import Controller from './users.controller';

const users: Router = Router();
const controller = new Controller();

users.get('/', controller.getAllUsers);

/**
 * Create user body
 * @typedef {object} CreateUserBody
 * @property {string} email.required - email of user
 * @property {string} name.required - name of user
 * @property {string} cognitoId.required - cognito id
 * @property {string} phone - phone number
 */

/**
 * POST /users/create
 * @summary Create user
 * @tags users
 * @param {CreateUserBody} request.body.required
 * @return {object} 200 - user response
 */
users.post(
  '/create',
  verifyAuthToken,
  RequestValidator.validate(CreateUserDto),
  controller.createUser
);

export default users;
