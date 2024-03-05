import { Component } from '@angular/core';
import { ANGULAR_ROUTER_TOKENS } from './angular.module';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {
  readonly ANGULAR_ROUTER_TOKENS = ANGULAR_ROUTER_TOKENS;

  readonly routingLink = `../${ANGULAR_ROUTER_TOKENS.ROUTING}`;
}
