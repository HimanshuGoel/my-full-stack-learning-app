import { Component, inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  locale = inject(LOCALE_ID);

  test: Date = new Date();
}
