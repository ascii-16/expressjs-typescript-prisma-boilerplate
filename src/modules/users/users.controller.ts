import { type NextFunction, type Request } from 'express';
import { type users } from '@prisma/client';
import { CustomResponse } from '@/types/common';
import UserService from './users.service';
import Api from '@/lib/api';
import httpStatus from 'http-status';

export default class UserController extends Api {
  private readonly userService = new UserService();

  public createUser = async (
    req: Request,
    res: CustomResponse<users>,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.createUser(req.body);
      this.send(res, user, httpStatus.CREATED, 'createUser');
    } catch (e) {
      next(e);
    }
  };
}
