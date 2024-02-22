import {
  Component,
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html'
})
export class ViewChildComponent {
  @ViewChild(PaneDirective)
  set pane(v: PaneDirective) {
    setTimeout(() => {
      this.selectedPane = v.id;
    }, 0);
  }

  selectedPane: string = '';
  shouldShow = true;
  toggle() {
    this.shouldShow = !this.shouldShow;
  }
  constructor() {}
}

@Directive({ selector: 'pane' })
export class PaneDirective {
  @Input() id!: string;
}
