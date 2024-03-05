import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { EnvironmentProviders, isDevMode, makeEnvironmentProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  LOGGER_PROVIDERS,
  LogLevel,
  MIN_LOG_LEVEL
} from './features/angular/concepts/example-logger2.service';
import {
  ConsoleProvider,
  TimedConsoleProvider
} from './features/angular/concepts/example-logger.service';
import { InMemoryWebApiService } from './features/angular/concepts/example-in-memory-web-api.service';
import { AngularModule } from './features/angular/angular.module';
import { TypescriptModule } from './features/typescript/typescript.module';

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
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AngularModule,
    TypescriptModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryWebApiService, { delay: 200 })
  ],
  bootstrap: [AppComponent],
  providers: [
    registerLoggerProviders(),
    {
      provide: MIN_LOG_LEVEL,
      useValue: isDevMode() ? LogLevel.INFO : LogLevel.NEVER
    }
  ]
})
export class AppModule {}
