import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html'
})
export class TwoWayDataBindingComponent {
  messageValue!: string;

  @Output()
  messageChange = new EventEmitter<string>();

  @Input()
  get message() {
    return this.messageValue;
  }

  set message(val) {
    this.messageValue = val;
    this.messageChange.emit(this.messageValue);
  }
  constructor() {}
}
