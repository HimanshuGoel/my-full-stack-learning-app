import { DOCUMENT } from '@angular/common';
import { Injectable, InjectionToken, inject } from '@angular/core';
import {
  Observable,
  OperatorFunction,
  Subject,
  combineLatest,
  debounceTime,
  defer,
  distinctUntilChanged,
  fromEvent,
  map,
  mapTo,
  of,
  repeat,
  scan,
  share,
  skip,
  startWith,
  switchMap,
  switchMapTo,
  takeUntil,
  takeWhile,
  tap,
  timer
} from 'rxjs';

// Write a page visibility stream and log in console when it emits. MDN Page Visibility API can help you ;)
// Additional Angular task: make it as a global DI injection token
export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
  'Shared Observable based on `document visibility changed`',
  {
    factory: () => {
      const documentRef = inject(DOCUMENT);

      return fromEvent(documentRef, 'visibilitychange').pipe(
        startWith(0),
        map(() => documentRef.visibilityState !== 'hidden'),
        distinctUntilChanged(),
        share()
      );
    }
  }
);

@Injectable({
  providedIn: 'root'
})
export class RxJsExamplesService {
  readonly load$ = new Subject<void>();
  readonly cancel$ = new Subject<void>();

  // Create a no-flicker loading message:
  // If loading took < 1 sec. do not show it
  // If loading took > 1 sec. show it for at least 1 sec.
  readonly data$ = this.load$.pipe(
    switchMapTo(this.nonFlickerLoader(this.load())),
    map((value) => value ?? 'Loading...'),
    startWith('No data'),
    takeUntil(this.cancel$),
    repeat()
  );

  readonly items$ = of('1').pipe(this.smartSearch(this.requestBackendEmulation));

  constructor(@Inject(PAGE_VISIBILITY) readonly pageVisibility$: Observable<boolean>) {}

  mainMethod() {}

  cancel() {
    this.cancel$.next();
  }

  // Make an operator function to prevent unnecessary backend requests when it is possible to calculate items locally. For example, if user requested 'tes' and got ['test1', 'test2', 'test3'] then there is no need to make requests for 'test' or 'test1
  smartSearch<T>(
    getSearchFunction: (search: string) => Observable<readonly T[]>,
    searchDebounceTimeMs: number = 400
  ): OperatorFunction<string, readonly T[] | null> {
    return (source) =>
      source.pipe(
        debounceTime(searchDebounceTimeMs),
        scan((previousSearched, current) => {
          return previousSearched !== '' && current.startsWith(previousSearched)
            ? previousSearched
            : current;
        }, ''),
        distinctUntilChanged(),
        switchMap((value) => getSearchFunction(value).pipe(startWith(null))),
        startWith([])
      );
  }

  requestBackendEmulation(search: string): Observable<readonly string[]> {
    console.log('backend called');

    const tests = ['test1', 'test2', 'test3'].filter((test) => !!search && test.startsWith(search));

    if (tests.length) {
      return of(tests);
    }

    if (search.startsWith('1')) {
      return of(['125', '12', '199']);
    }

    return of([]);
  }

  nonFlickerLoader<T>(
    data$: Observable<T>,
    delay: number = 1000,
    duration: number = 1000
  ): Observable<T | null> {
    const loading$ = timer(delay, duration).pipe(
      map((i) => !i),
      takeWhile<boolean>(Boolean, true),
      startWith(false)
    );

    return combineLatest([data$.pipe(startWith(null)), loading$]).pipe(
      takeWhile(([data, loading]) => !data || loading, true),
      map(([data, loading]) => (loading ? null : data)),
      skip(1),
      distinctUntilChanged()
    );
  }

  load(): Observable<string> {
    return defer(() => {
      const delay = Math.random() * 5;

      return timer(delay * 1000).pipe(mapTo(`Loading took ${delay} seconds`), tap(console.log));
    });
  }
}
