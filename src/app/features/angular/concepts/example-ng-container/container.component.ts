import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})
export class StateButtonComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  action$ = timer(2000);

  @Input()
  initialTemplate!: TemplateRef<any>;

  @Input()
  workingTemplate!: TemplateRef<any>;

  @Input()
  doneTemplate!: TemplateRef<any>;

  currentTemplate!: TemplateRef<any>;

  ngOnInit() {
    this.currentTemplate = this.initialTemplate;
  }

  triggerAction() {
    this.currentTemplate = this.workingTemplate;
    this.action$.subscribe(() => (this.currentTemplate = this.doneTemplate));
  }
}
