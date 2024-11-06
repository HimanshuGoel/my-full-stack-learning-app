import { Directive } from '@angular/core';

@Directive({
  selector: '[appNoPaste]',
  host: { paste: '$event.preventDefault()' },
})
export class NoPasteDirective {}
