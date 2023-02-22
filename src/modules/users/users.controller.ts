import { type NextFunction, type Request } from 'express';
import { type users } from '@prisma/client';
import { type CustomResponse } from '@/types/common.type';
import UserService from './users.service';
import Api from '@/lib/api';
import { HttpStatusCode } from 'axios';

export default class UserController extends Api {
  private readonly userService = new UserService();

  public createUser = async (
    req: Request,
    res: CustomResponse<users>,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.createUser(req.body);
      this.send(res, user, HttpStatusCode.Created, 'createUser');
    } catch (e) {
      next(e);
    }
  };
}
