import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { apiErrorHandler } from './handlers/api-error.handler';

import { morganMiddleware } from './middlewares/morgan.middleware';
import { registerRoutes } from './routes';
import { DBUtility } from './utilities/db.utility';

export class App {
  public express!: express.Application;

  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
    this.setDBConnection();
    this.setErrorHandler();
  }

  private setErrorHandler() {
    this.express.use(apiErrorHandler);
  }

  private setDBConnection(): void {
    DBUtility.createConnection();
  }

  private setMiddlewares(): void {
    this.express.use(cors());
    this.express.use(helmet());
    this.express.use(morganMiddleware);
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private setRoutes(): void {
    this.express.get('/', this.basePathRoute);
    registerRoutes(this.express);
  }

  private basePathRoute(request: express.Request, response: express.Response): void {
    response.json({ api: 'express-node-js', message: 'base path' });
  }
}
