import util from 'util';
import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { ApiError } from '../abstractions/api-error';
import { logger } from '../utilities/logger.utility';

export const apiErrorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err) {
    const errorObject = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      statusText: ReasonPhrases.INTERNAL_SERVER_ERROR,
      message: err.message || 'An error occurred during the request.',
      name: err.name,
      stack: err.stack,
      requestInfo: {
        hostname: req.hostname,
        path: req.path,
        app: req.app
      }
    };

    logger.error(`REQUEST HANDLING ERROR:
        \n${chalk.red('ERROR:')}\n${chalk.grey(JSON.stringify(errorObject))}
        \n${chalk.yellowBright('REQUEST HEADERS:')}\n${chalk.grey(util.inspect(req.headers))}
        \n${chalk.magentaBright('REQUEST PARAMS:')}\n${chalk.grey(util.inspect(req.params))}
        \n${chalk.magentaBright('REQUEST QUERY:')}\n${chalk.grey(util.inspect(req.query))}
        \n${chalk.greenBright('BODY:')}\n${chalk.grey(util.inspect(req.body))}`);

    res.status(errorObject.status).json(errorObject);
  }
  next();
};
