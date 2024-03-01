import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type ParamsType = { hideLoader: boolean };

export const ResponseMessage = {
  serverError: 'Critical server error occurred, please try again later',
  emailHeaderError: 'user email is required',
  correlationIdHeaderError: 'correlationId is required',
  invalidEmailHeaderError: 'Invalid user email address',
  invalidCorrelationId: 'Invalid correlationId',
  emailHeader: 'x-user-email',
  correlationIdHeader: 'x-correlation-id',
  authorizationHeader: 'authorization',
  roleHeader: 'x-user-role'
};

export interface IApiBaseActions {
  get(url: string, params?: ParamsType): Observable<any>;

  getAll(url: string, params?: ParamsType): Observable<any>;

  post(url: string, data: any, params?: ParamsType): Observable<any>;

  delete(url: string, data?: any, params?: ParamsType): Observable<any>;

  put(url: string, data: any, params?: ParamsType): Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService implements IApiBaseActions {
  constructor(public httpClient: HttpClient) {}

  get(url: string, params?: ParamsType) {
    return this.httpClient
      .get(url, { params: this.createParams(params) })
      .pipe(tap((x) => this.handleResponse(x)));
  }

  getAll(url: string, params?: ParamsType) {
    return this.httpClient
      .get(url, { params: this.createParams(params) })
      .pipe(tap((x) => this.handleResponse(x)));
  }

  post(url: string, data: any, params?: ParamsType) {
    return this.httpClient
      .post(url, data, { params: this.createParams(params) })
      .pipe(tap((x) => this.handleResponse(x)));
  }

  delete(url: string, data: any, params?: ParamsType) {
    return this.httpClient
      .delete(url, { params: this.createParams(params) })
      .pipe(tap((x) => this.handleResponse(x)));
  }

  put(url: string, data: any, params?: ParamsType) {
    return this.httpClient
      .put(url, data, { params: this.createParams(params) })
      .pipe(tap((x) => this.handleResponse(x)));
  }

  handleResponse(response: any) {
    if (response.Status === 500) {
      alert(ResponseMessage.serverError);
    }
  }

  createParams(params?: ParamsType) {
    let httpParams = new HttpParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        httpParams = httpParams.append(key, value);
      });
    }
    return httpParams;
  }
}
