import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTING_ROUTER_TOKENS } from '../routing.routes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  constructor(private readonly router: Router) {}

  close() {
    this.router.navigate([{ outlets: { [ROUTING_ROUTER_TOKENS.CART]: null } }]);
  }
}
