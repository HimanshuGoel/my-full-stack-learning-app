import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

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
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: DEFAULT_CURRENCY_CODE,
      useFactory: (locale: string) => (locale === 'ja' ? 'JPY' : 'USD'),
      deps: [LOCALE_ID],
    },
  ],
})
export class AppModule {}
