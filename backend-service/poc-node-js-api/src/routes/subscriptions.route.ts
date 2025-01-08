import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { SubscriptionsRepo } from '../repos/subscriptions.repo';
import { BaseApiRoute } from './base-api.route';

export class SubscriptionsRoute extends BaseApiRoute {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(app: Application): void {
    app.use('/api', this.router);

    this.router
      .get('/subscriptions', this.getAll.bind(this))
      .get('/subscriptions/:name', this.getByName.bind(this))
      .post('/subscriptions/:name', this.createByName.bind(this))
      .put('/subscriptions/:name', this.updateByName.bind(this))
      .delete('/subscriptions/:name', this.deleteByName.bind(this));
  }

  private async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const subscriptions = await SubscriptionsRepo.getAll();

      res.status(StatusCodes.OK).json({
        status: StatusCodes.OK,
        statusText: ReasonPhrases.OK,
        data: { subscriptions }
      });
    } catch (error: unknown) {
      next(error);
    }
  }

  private async getByName(req: Request, res: Response, next: NextFunction) {
    // try {
    //   const { name: applicationName } = req.params;
    //   if (!applicationName) {
    //     sendInvalidParamsResponse('applicationName', 'route-params', res);
    //   } else {
    //     const application = await ApplicationsRepo.getByName(applicationName, userEmailId);
    //     res.status(StatusCodes.OK).json({
    //       status: StatusCodes.OK,
    //       statusText: ReasonPhrases.OK,
    //       data: { application }
    //     });
    //   }
    // } catch (error) {
    //   next(error);
    // }
  }

  private async createByName(req: Request, res: Response, next: NextFunction) {
    // try {
    //   const applicationData = req.body.data as IDTOSaveApplication;
    //   const alreadyExists = await ApplicationsRepo.getByName(applicationData.name, userEmailId);
    //   if (alreadyExists) {
    //     res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    //       status: StatusCodes.UNPROCESSABLE_ENTITY,
    //       statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
    //       message: MESSAGE.recordAlreadyExists
    //     });
    //   } else {
    //     const errors = this.checkForValidations(applicationData);
    //     if (errors.length > 0) {
    //       res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    //         status: StatusCodes.UNPROCESSABLE_ENTITY,
    //         statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
    //         errors
    //       });
    //     } else {
    //       await ApplicationsRepo.create(applicationData, userEmailId);
    //       res.status(StatusCodes.CREATED).json({
    //         status: StatusCodes.CREATED,
    //         statusText: ReasonPhrases.CREATED
    //       });
    //     }
    //   }
    // } catch (error: unknown) {
    //   next(error);
    // }
  }

  private async updateByName(req: Request, res: Response, next: NextFunction) {
    // try {
    //   const { name: existingApplicationName } = req.params;
    //   if (!existingApplicationName) {
    //     sendInvalidParamsResponse('applicationName', 'route-params', res);
    //   } else {
    //     const applicationData = req.body.data as IDTOSaveApplication;
    //     const errors = this.checkForValidations(applicationData);
    //     if (errors.length > 0) {
    //       res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    //         status: StatusCodes.UNPROCESSABLE_ENTITY,
    //         statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
    //         errors
    //       });
    //     } else if (applicationData.name === existingApplicationName) {
    //       await ApplicationsRepo.update(existingApplicationName, applicationData, userEmailId);
    //       res.status(StatusCodes.OK).json({
    //         status: StatusCodes.OK,
    //         statusText: ReasonPhrases.OK
    //       });
    //     } else {
    //       const alreadyExists = await ApplicationsRepo.getByName(applicationData.name, userEmailId);
    //       if (alreadyExists) {
    //         res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    //           status: StatusCodes.UNPROCESSABLE_ENTITY,
    //           statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
    //           message: MESSAGE.recordAlreadyExists
    //         });
    //       } else {
    //         await ApplicationsRepo.update(existingApplicationName, applicationData, userEmailId);
    //         res.status(StatusCodes.OK).json({
    //           status: StatusCodes.OK,
    //           statusText: ReasonPhrases.OK
    //         });
    //       }
    //     }
    //   }
    // } catch (error: unknown) {
    //   next(error);
    // }
  }

  private async deleteByName(req: Request, res: Response, next: NextFunction) {
    // try {
    //   const { name: applicationName } = req.params;
    //   if (!applicationName) {
    //     sendInvalidParamsResponse('applicationName', 'route-params', res);
    //   } else {
    //     await ApplicationsRepo.delete(applicationName, userEmailId);
    //     res.status(StatusCodes.NO_CONTENT).json();
    //   }
    // } catch (error: unknown) {
    //   next(error);
    // }
  }
}
