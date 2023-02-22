import { type Response } from 'express';

type Send<ResBody = any, T = Response<ResBody>> = (body?: {
  message: string;
  data: ResBody;
}) => T;

export interface CustomResponse<T> extends Response {
  json: Send<T, this>;
}
