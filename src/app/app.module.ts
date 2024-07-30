import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
  withJsonpSupport,
} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { jsonCachingInterceptor } from './interceptors/caching-interceptor';
import { loggingInterceptor } from './interceptors/logging-interceptor';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { CoffeeApiService } from './services/coffee-api.service';

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    CoffeeApiService,
    provideHttpClient(
      withInterceptorsFromDi(),
      withJsonpSupport(),
      withInterceptors([jsonCachingInterceptor, loggingInterceptor, retryInterceptor])
    ),
    {
      provide: DEFAULT_CURRENCY_CODE,
      useFactory: (locale: string) => (locale === 'ja' ? 'JPY' : 'USD'),
      deps: [LOCALE_ID],
    },
  ],
})
export class AppModule {}
