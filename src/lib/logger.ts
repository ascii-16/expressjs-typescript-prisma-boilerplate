import { LOG_DIR } from '@/utils/constants';
import { existsSync, mkdirSync } from 'fs';
import {
  createLogger,
  format,
  transport,
  type Logger,
  LogEntry,
  transports,
} from 'winston';
import environment from './environment';

if (!existsSync(LOG_DIR)) {
  mkdirSync(LOG_DIR);
}

const logTransports: transport[] = [new transports.Console()];
const fileTransports: transport[] = [
  new transports.File({
    filename: `${LOG_DIR}/error.log`,
    level: 'error',
  }),
  new transports.File({ filename: `${LOG_DIR}/app.log` }),
];

if (!environment.isLocal()) {
  logTransports.push(...fileTransports);
}

const { printf, combine, label, timestamp, json, prettyPrint } = format;
const logFormattter = printf(({ level, message, label, timestamp }) => {
  return `[${String(label)}] ${String(timestamp)} ${level}: ${String(message)}`;
});
const logger: Logger = createLogger({
  format: combine(
    label({ label: environment.getCurrentEnvironment() }),
    timestamp({ format: 'MM-DD-YYYY HH:MM:SS' }),
    json(),
    prettyPrint({ colorize: true }),
    logFormattter
  ),
  transports: logTransports,
});

export const logWithoutConsole = (logEntry: LogEntry) => {
  const consoleTransport = logger.transports.find(
    (transport) => transport instanceof transports.Console
  );
  const fileTransport = logger.transports.find(
    (transport) => transport instanceof transports.File
  );

  if (!fileTransport) {
    fileTransports.forEach((transport) => logger.add(transport));
  }

  if (!consoleTransport) {
    logger.log(logEntry);
    return;
  }

  logger.remove(consoleTransport);
  logger.log(logEntry);
  logger.add(consoleTransport);
};

export default logger;
