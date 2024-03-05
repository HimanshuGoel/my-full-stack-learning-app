import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { EnvironmentProviders, isDevMode, makeEnvironmentProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
