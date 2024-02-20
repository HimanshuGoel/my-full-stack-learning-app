import { Component } from '@angular/core';
import { ANGULAR_ROUTER_TOKENS } from '../angular.module';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {
  readonly ANGULAR_ROUTER_TOKENS = ANGULAR_ROUTER_TOKENS;

  readonly routingLink = `../${ANGULAR_ROUTER_TOKENS.ROUTING}`;
}
