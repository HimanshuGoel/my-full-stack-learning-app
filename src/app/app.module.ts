import { EnvironmentProviders, NgModule, isDevMode, makeEnvironmentProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './core/services/service.module';
import { APP_CONFIG, HERO_DI_CONFIG } from './core/services/injection-token';
import { LOGGER_PROVIDERS, LogLevel, MIN_LOG_LEVEL } from './core/services/logging.service';
import { ConsoleProvider, TimedConsoleProvider } from './core/services/logger-provider.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryContactsApi } from './core/services/in-memory-contacts.service';
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
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryContactsApi, { delay: 200 })
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
    registerLoggerProviders(),
    {
      provide: MIN_LOG_LEVEL,
      useValue: isDevMode() ? LogLevel.INFO : LogLevel.NEVER
    }
  ]
})
export class AppModule {}
