import { type LogEntry } from 'winston';
import logger from '../../../src/lib/logger';

describe('[Unit] - logger', () => {
  jest.mock('../../../src/lib/logger');

  it('should log info log', () => {
    const logSpy = jest.spyOn(logger, 'log');
    const mockLogMessage = 'Test info log message';
    const info: LogEntry = {
      level: 'info',
      message: mockLogMessage,
    };
    logger.log(info);
    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        message: mockLogMessage,
        level: 'info',
      })
    );
  });

  it('should log error log', () => {
    const logSpy = jest.spyOn(logger, 'log');
    const mockLogMessage = 'Test error log message';
    const info: LogEntry = {
      level: 'error',
      message: mockLogMessage,
    };
    logger.log(info);
    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        message: mockLogMessage,
        level: 'error',
      })
    );
  });
});
