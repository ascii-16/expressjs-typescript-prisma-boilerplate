import { NextFunction, Request, Response } from 'express';

export const verifyAuthToken = async (
  // Remove underscore of params once you start using them
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  // Replace with your auth token verification strategy
  next();
};
