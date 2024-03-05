import { filter, map, Observable, of, pipe, Subject, takeUntil, tap } from 'rxjs';

import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ROUTER_TOKENS } from './app-routing.module';
import { Logger2Service } from './features/angular/concepts/example-logger2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;

  readonly #logger = inject(Logger2Service);

  readonly title = 'Full Stack Learnings App';
  readonly angularLink = `./${ROUTER_TOKENS.ANGULAR}`;
  readonly typescriptLink = `./${ROUTER_TOKENS.TYPESCRIPT}`;

  private unsubscribe$ = new Subject<void>();

  progress = 0;
  success = false;

  currencySignal = signal('USD');

  signup = new FormGroup({
    email: new FormControl(null, Validators.required),
    image: new FormControl(null)
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.currencySignal.set('CAD');

    of([1, 2, 3])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => console.log(data));

    this.#logger.info('Todo Item #%d deleted', 0);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getCurrencySignal(): Signal<string> {
    return this.currencySignal.asReadonly();
  }

  submit() {
    this.success = false;
    if (!this.signup.valid) {
      markAllAsDirty(this.signup);
      return;
    }

    this.http
      .post('http://localhost:8080/signup', toFormData(this.signup.value), {
        reportProgress: true,
        observe: 'events'
      })
      .pipe(
        uploadProgress((progress) => (this.progress = progress)),
        toResponseBody()
      )
      .subscribe((response) => {
        console.log(response);
        this.progress = 0;
        this.success = true;
        this.signup.reset();
      });
  }

  hasError(field: string, error: string) {
    const control = this.signup.get(field);
    return control?.dirty && control?.hasError(error);
  }
}

export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((100 * event.loaded) / event.total!));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter(
      (event: HttpEvent<T>): event is HttpResponse<T> => event.type === HttpEventType.Response
    ),
    map((res: HttpResponse<T>) => res.body)
  ) as (source: Observable<HttpEvent<T>>) => Observable<T>;
}

export function markAllAsDirty(form: FormGroup) {
  for (const control of Object.keys(form.controls)) {
    form.controls[control].markAsDirty();
  }
}

export function toFormData<T extends Record<string, any>>(formValue: T) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}
