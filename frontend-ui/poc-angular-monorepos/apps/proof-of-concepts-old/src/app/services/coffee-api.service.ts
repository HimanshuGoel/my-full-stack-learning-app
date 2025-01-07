import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpContext,
  HttpContextToken,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Coffee } from '../types/coffee';
import { Observable, Subject, TimeoutError, forkJoin, throwError, timer } from 'rxjs';
import { catchError, map, timeout, takeUntil, concatMap, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export const COFFEE_API_RETRY_COUNT = new HttpContextToken(
  () => environment.coffeeServiceRetryCount
);

@Injectable({
  providedIn: 'root',
})
export class CoffeeApiService {
  private apiURL = 'https://fake-coffee-api.vercel.app/api';

  constructor(private http: HttpClient) {}

  private cancelCoffeeFetch$ = new Subject<boolean>();

  /*
    CRUD Methods for consuming RESTful API
  */

  // Note: This particular API does not like the client (us) setting the Content-Type
  // but note that for many JSON endpoints, you will need to use this header.
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  cancel() {
    console.log('Canceling request');
    this.cancelCoffeeFetch$.next(true);
  }

  // GET
  getCoffees(): Observable<Coffee[]> {
    return (
      this.http
        // Uncomment this to test retry interceptor
        // .get<Coffee[]>(this.apiURL + 'lskdfjalskdf', {
        .get<Coffee[]>(this.apiURL, {
          context: new HttpContext().set(
            COFFEE_API_RETRY_COUNT,
            environment.coffeeServiceRetryCount
          ),
        })
        .pipe(takeUntil(this.cancelCoffeeFetch$), catchError(this.handleError))
    );
  }

  // GET
  getCoffeesWithTimeout(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiURL).pipe(
      timeout(2),
      retry({
        count: environment.coffeeServiceRetryCount,
        delay: (err: unknown, attemptNum: number) => {
          console.error(
            `[CoffeeApiService] => Encountered an error while retrying request on attempt ${attemptNum}: `,
            err
          );
          return timer(1000 * attemptNum);
        },
      }),
      catchError(this.handleErrorWithTimeout)
    );
  }

  // GET by ID
  getCoffee(id: number): Observable<Coffee> {
    return this.http.get<Coffee>(this.apiURL + '/' + id).pipe(catchError(this.handleError));
  }

  // Request a Coffee object in its raw, string representation
  getCoffeeAsText(id: number): Observable<string> {
    return this.http
      .get(this.apiURL + '/' + id, { responseType: 'text' })
      .pipe(catchError(this.handleError));
  }

  // Get Coffee image buffer by URL
  getCoffeeImageBuffer(url: string): Observable<ArrayBuffer> {
    return this.http.get(url, { responseType: 'arraybuffer' }).pipe(catchError(this.handleError));
  }

  // Get Coffee image blob (file object) by URL
  getCoffeeImageBlob(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' }).pipe(catchError(this.handleError));
  }

  // POST
  createCoffee(coffee: Partial<Coffee>): Observable<Coffee> {
    return this.http
      .post<{ success: boolean; added: Coffee }>(this.apiURL, JSON.stringify(coffee))
      .pipe(
        map((res) => res.added),
        catchError(this.handleError)
      );
  }

  // PUT
  updateCoffee(coffee: Partial<Coffee>): Observable<Coffee> {
    return this.http
      .put<{ message: string; update: Coffee }>(
        this.apiURL + '/' + coffee.id,
        JSON.stringify(coffee)
      )
      .pipe(
        map((res) => res.update),
        catchError(this.handleError)
      );
  }

  // DELETE
  deleteCoffee(id: number) {
    return this.http
      .delete<Coffee>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // JSONP
  getCoffeeHostIPAddress() {
    return this.http
      .jsonp<{ ip: string }>('https://jsonip.com', 'callback')
      .subscribe((ipResponse) => console.log('Coffee Host IP: ', ipResponse.ip));
  }

  // Multiple Requests in parallel
  getCoffeeChunks(): Observable<Coffee[]> {
    return forkJoin([
      this.http.get<Coffee[]>(this.apiURL + '?limit=5'),
      this.http.get<Coffee[]>(this.apiURL + '?limit=10'),
      this.http.get<Coffee[]>(this.apiURL + '?limit=15'),
    ]).pipe(
      map((coffeeChunks) => coffeeChunks.flat()),
      catchError(this.handleError)
    );
  }

  // Synchronous Requests
  getCoffeeChunksSync(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiURL + '?limit=5').pipe(
      concatMap(() =>
        this.http.get<Coffee[]>(this.apiURL + '?limit=10').pipe(
          concatMap(() => this.http.get<Coffee[]>(this.apiURL + '?limit=15')),
          catchError(this.handleError)
        )
      )
    );
  }

  // Shared error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      // Get client-side error
      errorMessage = error.error;
      console.error('[CoffeeApiService] => Client-side HTTP error occurred: ', errorMessage, error);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
      console.error('[CoffeeApiService] => Server-side HTTP error occurred: ', errorMessage, error);
    }
    return throwError(() => {
      return errorMessage;
    });
  }

  private handleErrorWithTimeout(error: HttpErrorResponse | TimeoutError) {
    const errorMessage = '';
    if (error instanceof TimeoutError) {
      console.error('[CoffeeApiService] => Request timed out!', error);
      return throwError(() => {
        return errorMessage;
      });
    } else {
      return this.handleError(error);
    }
  }
}
