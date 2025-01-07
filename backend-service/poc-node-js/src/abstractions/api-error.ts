import { IApiError } from '../interfaces/error.interface';

export class ApiError extends Error implements IApiError {
  public status = 500;
  public success = false;

  constructor(message: string, status: number, name = 'ApiError') {
    super();
    this.name = name;
    this.status = status;
    this.message = message;
  }
}
