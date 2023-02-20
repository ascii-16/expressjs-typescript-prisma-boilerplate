import { Response } from 'express';
import httpStatus from 'http-status';
import environment from './environment';
import logger from './logger';

abstract class Api {
  public send<T>(
    res: Response,
    data: T,
    statusCode: number = httpStatus.OK,
    message: string = 'success'
  ) {
    if (!environment.isLocal()) {
      logger.info(JSON.stringify(data, null, 2));
    }

    return res.status(statusCode).json({
      message,
      data,
    });
  }
}

export default Api;
