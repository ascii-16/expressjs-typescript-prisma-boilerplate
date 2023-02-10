import { type ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { type Request, type Response, type NextFunction } from 'express';
import { HttpBadRequestError } from '@/lib/errors';
import logger from '@/lib/logger';

export default class RequestValidator {
  static validate = <T>(classInstance: ClassConstructor<T>) => {
    return async (req: Request, _res: Response, next: NextFunction) => {
      const convertedObject = plainToInstance(classInstance, req.body);
      try {
        await validate(convertedObject as Record<string, unknown>);
        next();
      } catch (errors) {
        if (errors.length > 0) {
          let rawErrors: string[] = [];
          for (const errorItem of errors) {
            rawErrors = rawErrors.concat(
              ...rawErrors,
              Object.values(errorItem.constraints ?? [])
            );
          }
          const validationErrorText = 'Request validation failed!';
          logger.error(rawErrors);
          next(new HttpBadRequestError(validationErrorText, rawErrors));
        }
      }
    };
  };
}
