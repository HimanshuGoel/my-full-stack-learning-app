import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html'
})
export class ConsumerComponent {
  title = 'hello';
  constructor() {}
}
