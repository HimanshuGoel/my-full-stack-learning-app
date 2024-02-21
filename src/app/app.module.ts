import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { EnvironmentProviders, isDevMode, makeEnvironmentProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryContactsApi } from './core/mocks/services/in-memory-contacts.service';
import { APP_CONFIG, HERO_DI_CONFIG } from './core/mocks/services/injection-token';
import {
  ConsoleProvider,
  TimedConsoleProvider
} from './core/mocks/services/logger-provider.service';
import { LOGGER_PROVIDERS, LogLevel, MIN_LOG_LEVEL } from './core/mocks/services/logging.service';
import { ServiceModule } from './core/mocks/services/service.module';
import { HomeComponent } from './shared/pages/home/home.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

function registerLoggerProviders(): EnvironmentProviders {
  return makeEnvironmentProviders(
    isDevMode()
      ? [
          {
            provide: LOGGER_PROVIDERS,
            useClass: ConsoleProvider,
            multi: true
          },
          {
            provide: LOGGER_PROVIDERS,
            useClass: TimedConsoleProvider,
            multi: true
          }
        ]
      : []
  );
}

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryContactsApi, { delay: 200 }),
    HttpClientModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  bootstrap: [AppComponent],
  providers: [
    registerLoggerProviders(),
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
    {
      provide: MIN_LOG_LEVEL,
      useValue: isDevMode() ? LogLevel.INFO : LogLevel.NEVER
    }
  ]
})
export class AppModule {}
