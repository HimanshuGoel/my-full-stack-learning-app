import { Observable, of, tap } from 'rxjs';

import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { CachingService } from '../services/caching.service';

export const cachingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const cachingService = inject(CachingService);
  const cachedData = cachingService.get(req.url);

  const isCacheHit = cachedData !== undefined;
  if (isCacheHit) {
    return of(cachedData);
  }

  return next(req).pipe(
    tap((response: HttpEvent<unknown>) => cachingService.set(req.url, response))
  );
};
