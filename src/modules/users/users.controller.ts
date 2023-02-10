import { type NextFunction, type Request } from 'express';
import { PrismaClient, type users } from '@prisma/client';
import { CustomResponse } from '@/types/common';
import UserService from './users.service';
import Api from '@/lib/api';
import httpStatus from 'http-status';

const prisma = new PrismaClient();

export default class UserController extends Api {
  private readonly userService = new UserService();

  public getAllUsers = async (
    _req: Request,
    res: CustomResponse<users[]>,
    next: NextFunction
  ) => {
    try {
      const users = await prisma.users.findMany();
      res.locals.data = users;
      this.send(res, 'getAllUsers');
    } catch (e) {
      next(e);
    }
  };

  public createUser = async (
    req: Request,
    res: CustomResponse<users>,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.createUser(req.body);
      res.locals.data = user;
      this.send(res, 'createUser', httpStatus.CREATED);
    } catch (e) {
      next(e);
    }
  };
}
