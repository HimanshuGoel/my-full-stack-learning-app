import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { BaseApiRoute } from './base-api.route';

export class HealthRoute extends BaseApiRoute {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(app: Application): void {
    app.use('/api/status', this.router);

    this.router.get('/health', this.getServerHealth.bind(this));
  }

  private getServerHealth(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(StatusCodes.OK).send({
        status: ReasonPhrases.OK
      });
    } catch (error: unknown) {
      next(error);
    }
  }
}
