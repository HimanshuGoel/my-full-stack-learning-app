import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, startWith, switchMap } from 'rxjs/operators';

@Injectable()
export class LoadingService {
  toAsynchronousStateHandler<T, R>(
    projection: (value: T) => Observable<R>,
  ) {
    return switchMap((value: T) =>
      projection(value).pipe(
        startWith('loading' as const),
        catchError(() => of('error' as const)),
      ),
    );
  }
}


// component

// private readonly httpClient = inject(HttpClient);
// private readonly activatedRoute = inject(ActivatedRoute);

// protected readonly user$: Observable<UserResponse | 'loading' | 'error'> =
//   this.activatedRoute.params.pipe(
//     toAsynchronousStateHandler((params) =>
//       this.httpClient.get<UserResponse>(
//         `https://jsonplaceholder.typicode.com/users/${params['id']}`,
//       ),
//     ),
//   );

// template

// @if (user$ | async; as user) {
//     @if (user === "loading") {
//       Loading...
//     } @else if (user === "error") {
//       Error...
//     } @else {
//       <app-user-brief [user]="user" />
//     }
//   }


// export function toAsynchronousStateHandler<T, R>(
//     projection: (value: T) => Observable<R>,
//     reloadTrigger = new Observable<void>(),
//   ) {
//     return function (source: Observable<T>) {
//       return combineLatest([
//           source,
//           reloadTrigger.pipe(startWith(void 0))
//       ]).pipe(
//         switchMap(([value, _]) =>
//           projection(value).pipe(
//             startWith('loading' as const),
//             catchError(() => of('error' as const)),
//           ),
//         ),
//       );
//     };
//   }


// private readonly refetchTrigger$$ = new Subject<void>();

// protected readonly user$: Observable<UserResponse | 'loading' | 'error'> =
//   this.activatedRoute.params.pipe(
//     toAsynchronousStateHandler(
//       (params) =>
//         this.httpClient.get<UserResponse>(
//           `https://jsonplaceholder.typicode.com/users/${params['id']}`,
//         ),
//       this.refetchTrigger$$.asObservable(),
//     ),
//   );

// protected onRefetch() {
//   this.refetchTrigger$$.next();
// }


// parallel data fetching

// protected readonly dataRequest$ = this.activatedRoute.params.pipe(
//     toAsynchronousStateHandler(
//       (params) =>
//         forkJoin({
//           user: this.httpClient.get<UserResponse>(
//             `https://jsonplaceholder.typicode.com/users/${params['id']}`,
//           ),
//           posts: this.httpClient.get<PostResponse[]>(
//             `https://jsonplaceholder.typicode.com/users/${params['id']}/posts`,
//           ),
//         }),
//       this.refetchTrigger$$.asObservable(),
//     ),
//   );


// ui

// @if (dataRequest$ | async; as dataRequest) {
//     @if (dataRequest === "loading") {
//       Loading...
//     } @else if (dataRequest === "error") {
//       Error...
//     } @else {
//       <app-user-brief [user]="dataRequest.user" />
//       <app-posts [posts]="dataRequest.posts" />
//     }
//   }


// @if (dataRequest$ | async; as dataRequest) {
//     @if (dataRequest === "loading") {
//       Loading...
//     } @else if (dataRequest === "error") {
//       Error...
//     } @else {
//       <app-user-brief [user]="dataRequest.user" />
//       <app-posts [posts]="dataRequest.posts" />
//     }
//   }


// deferrable ui

// @defer (on interaction) {
//     <app-posts [posts]="dataRequest.posts" />
//   } @placeholder {
//     <button>Show Posts</button>
//   } @loading {
//     Loading posts...
//   } @error {
//     Error...
//   }