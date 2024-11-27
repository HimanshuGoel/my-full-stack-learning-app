import { Application, NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import { IDENTIFIER } from '../constants/identifier.constant';
import { MESSAGE } from '../constants/message.constant';
import { PATH } from '../constants/path.constant';
import { IDTOSaveApplication } from '../interfaces/application.interface';
import { IValidationError } from '../interfaces/error.interface';
import { ApplicationsRepo } from '../repos/applications.repo';
import { generateDownloadFolder } from '../utilities/download.utility';
import { getUserEmailIdFromHeader, sendInvalidParamsResponse } from '../utilities/helper.utility';
import { getContentHeadersForZipFile, getZippedFolder } from '../utilities/zip.utility';
import { BaseApiRoute } from './base-api.route';

export class ApplicationsRoute extends BaseApiRoute {
  constructor(express: Application) {
    super();
    this.register(express);
  }

  public register(app: Application): void {
    app.use('/api', this.router);

    this.router
      .get('/applications', this.getApplications.bind(this))
      .get('/applications/:name', this.getApplicationByName.bind(this))
      .post('/applications/:name', this.createApplicationByName.bind(this))
      .put('/applications/:name', this.updateApplicationByName.bind(this))
      .delete('/applications/:name', this.deleteApplicationByName.bind(this));
  }

  private async getApplications(req: Request, res: Response, next: NextFunction) {
    try {
      const userEmailId = getUserEmailIdFromHeader(req);
      const applications = await ApplicationsRepo.getAll(userEmailId);

      res.status(StatusCodes.OK).json({
        status: StatusCodes.OK,
        statusText: ReasonPhrases.OK,
        data: { applications }
      });
    } catch (error: unknown) {
      next(error);
    }
  }

  private async getApplicationByName(req: Request, res: Response, next: NextFunction) {
    try {
      const userEmailId = getUserEmailIdFromHeader(req);

      const { name: applicationName } = req.params;
      if (!applicationName) {
        sendInvalidParamsResponse('applicationName', 'route-params', res);
      } else {
        const application = await ApplicationsRepo.getByName(applicationName, userEmailId);
        res.status(StatusCodes.OK).json({
          status: StatusCodes.OK,
          statusText: ReasonPhrases.OK,
          data: { application }
        });
      }
    } catch (error) {
      next(error);
    }
  }

  private async createApplicationByName(req: Request, res: Response, next: NextFunction) {
    try {
      const userEmailId = getUserEmailIdFromHeader(req);

      const applicationData = req.body.data as IDTOSaveApplication;
      const alreadyExists = await ApplicationsRepo.getByName(applicationData.name, userEmailId);
      if (alreadyExists) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
          status: StatusCodes.UNPROCESSABLE_ENTITY,
          statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
          message: MESSAGE.recordAlreadyExists
        });
      } else {
        const errors = this.checkForValidations(applicationData);
        if (errors.length > 0) {
          res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            status: StatusCodes.UNPROCESSABLE_ENTITY,
            statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
            errors
          });
        } else {
          await ApplicationsRepo.create(applicationData, userEmailId);
          res.status(StatusCodes.CREATED).json({
            status: StatusCodes.CREATED,
            statusText: ReasonPhrases.CREATED
          });
        }
      }
    } catch (error: unknown) {
      next(error);
    }
  }

  private async updateApplicationByName(req: Request, res: Response, next: NextFunction) {
    try {
      const userEmailId = getUserEmailIdFromHeader(req);

      const { name: existingApplicationName } = req.params;
      if (!existingApplicationName) {
        sendInvalidParamsResponse('applicationName', 'route-params', res);
      } else {
        const applicationData = req.body.data as IDTOSaveApplication;
        const errors = this.checkForValidations(applicationData);
        if (errors.length > 0) {
          res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            status: StatusCodes.UNPROCESSABLE_ENTITY,
            statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
            errors
          });
        } else if (applicationData.name === existingApplicationName) {
          await ApplicationsRepo.update(existingApplicationName, applicationData, userEmailId);
          res.status(StatusCodes.OK).json({
            status: StatusCodes.OK,
            statusText: ReasonPhrases.OK
          });
        } else {
          const alreadyExists = await ApplicationsRepo.getByName(applicationData.name, userEmailId);
          if (alreadyExists) {
            res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
              status: StatusCodes.UNPROCESSABLE_ENTITY,
              statusText: ReasonPhrases.UNPROCESSABLE_ENTITY,
              message: MESSAGE.recordAlreadyExists
            });
          } else {
            await ApplicationsRepo.update(existingApplicationName, applicationData, userEmailId);
            res.status(StatusCodes.OK).json({
              status: StatusCodes.OK,
              statusText: ReasonPhrases.OK
            });
          }
        }
      }
    } catch (error: unknown) {
      next(error);
    }
  }

  private async deleteApplicationByName(req: Request, res: Response, next: NextFunction) {
    try {
      const userEmailId = getUserEmailIdFromHeader(req);

      const { name: applicationName } = req.params;
      if (!applicationName) {
        sendInvalidParamsResponse('applicationName', 'route-params', res);
      } else {
        await ApplicationsRepo.delete(applicationName, userEmailId);
        res.status(StatusCodes.NO_CONTENT).json();
      }
    } catch (error: unknown) {
      next(error);
    }
  }

  private checkForValidations(application: IDTOSaveApplication): IValidationError[] {
    const errors: IValidationError[] = [];
    if (!application.name) {
      errors.push({
        field: 'applicationName',
        error: 'required',
        message: 'applicationName is required'
      });
    }
    if (!application.title) {
      errors.push({
        field: 'applicationTitle',
        error: 'required',
        message: 'applicationTitle is required'
      });
    }
    return errors;
  }
}
