import httpStatus from 'http-status';

export interface IApiError extends Error {
  statusCode: number;
  rawErrors?: string[];
}

export class ApiError extends Error implements IApiError {
  statusCode: number;
  rawErrors: string[];
  constructor(statusCode: number, message: string, rawErrors?: string[]) {
    super(message);
    this.statusCode = statusCode;
    if (rawErrors != null) this.rawErrors = rawErrors;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HttpBadRequestError extends ApiError {
  constructor(message: string, errors: string[]) {
    super(httpStatus.BAD_REQUEST, message, errors);
  }
}

export class HttpInternalServerError extends ApiError {
  constructor(message: string, errors?: string[]) {
    super(httpStatus.NON_AUTHORITATIVE_INFORMATION, message, errors);
  }
}

export class HttpUnAuthorizedError extends ApiError {
  constructor(message: string) {
    super(httpStatus.UNAUTHORIZED, message);
  }
}
