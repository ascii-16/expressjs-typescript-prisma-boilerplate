import { Response } from 'express';
import httpStatus from 'http-status';
import environment from './environment';
import logger from './logger';

abstract class Api {
  public send(
    res: Response,
    message: string,
    statusCode: number = httpStatus.OK
  ) {
    const { data } = res.locals;

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
