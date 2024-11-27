import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

import { PATH } from './constants/path.constant';
import { apiErrorHandler } from './handlers/api-error.handler';
import { staticContentHandler } from './handlers/static-content.handler';

import { morganMiddleware } from './middlewares/morgan.middleware';
import { registerRoutes } from './routes';
import { DBUtility } from './utilities/db.utility';

export class App {
  public express!: express.Application;

  constructor() {
    this.express = express();
    this.setStaticContentHandler();
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

  private setStaticContentHandler(): void {
    this.express.use(staticContentHandler);
    this.express.use(express.static(PATH.staticFolder));
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
