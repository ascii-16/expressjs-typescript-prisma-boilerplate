import { ApiError } from '@/lib/errors';
import logger from '@/lib/logger';
import util from 'util';
import { type NextFunction, type Request, type Response } from 'express';
import environment from '@/lib/environment';
import { HttpStatusCode } from 'axios';

interface ErrorBody {
  success: false;
  message: string;
  rawErrors?: string[];
  stack?: string;
}

const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Request Error:
        \nError:\n${JSON.stringify(err)}
        \nHeaders:\n${util.inspect(req.headers)}
        \nParams:\n${util.inspect(req.params)}
        \nQuery:\n${util.inspect(req.query)}
        \nBody:\n${util.inspect(req.body)}`);

  const status: number = err.statusCode ?? HttpStatusCode.InternalServerError;
  const errorBody: ErrorBody = {
    success: false,
    message: err.message,
    rawErrors: err.rawErrors,
  };

  if (environment.isLocal()) {
    errorBody.stack = err.stack;
  }

  res.status(status).send(errorBody);

  next();
};

export default errorHandler;
