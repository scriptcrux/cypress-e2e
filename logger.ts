import { createLogger, format, transports } from 'winston';
// import { ensureDirSync } from './utils';
import winston from 'winston';
// import * as path from 'path';
import BrowserConsole from 'winston-transport-browserconsole';

// // Define the log directory
const logDir = 'logs';

// // Ensure the log directory exists
// ensureDirSync(logDir);

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    })
  );
}

export default logger;
