import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize } = format;

const customLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    notice: 3,
    info: 4,
    debug: 5,
    trace: 6
  },
  colors: {
    fatal: 'red',
    error: 'red',
    warn: 'yellow',
    notice: 'magenta',
    info: 'green',
    debug: 'blue',
    trace: 'gray'
  }
};

const logger = createLogger({
  levels: customLevels.levels,
  format: combine(
    colorize({ all: true }),
    timestamp(),
    printf(({ level, message, timestamp }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ]
});

require('winston').addColors(customLevels.colors);

export default logger; // Ensure this line is correct
