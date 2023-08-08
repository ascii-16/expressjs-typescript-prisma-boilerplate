import { HttpStatusCode } from 'axios';
import { type Response } from 'express';
import environment from './environment';
import logger from './logger';

/**
 * `Api` Represents an abstract base class for common expressJS API operations.
 *  Inherit this class to use the helper functions.
 */
abstract class Api {
  /**
   * Sends a JSON response to the client with the given data.
   *
   * @template T - The type of the data to be sent in the response.
   * @param res - The express response object.
   * @param data - The data to be sent in the response.
   * @param statusCode - The HTTP status code for the response.
   * @param message - The message accompanying the response.
   * @returns - The express response object with the provided data and status code.
   */
  public send<T>(
    res: Response,
    data: T,
    statusCode: number = HttpStatusCode.Ok,
    message: string = 'success'
  ) {
    if (!environment.isDev()) {
      logger.info(JSON.stringify(data, null, 2));
    }

    return res.status(statusCode).json({
      message,
      data,
    });
  }

  /**
   * Triggers the download of a file from a given path.
   *
   * @param res - The express response object.
   * @param statusCode - The HTTP status code for the response.
   * @param path - The path of the file to be downloaded.
   */
  public download(
    res: Response,
    statusCode: number = HttpStatusCode.Ok,
    path: string
  ) {
    if (!environment.isDev()) {
      logger.info(`Downloaded file: ${path}`);
    }

    res.status(statusCode).download(path);
  }
}

export default Api;
