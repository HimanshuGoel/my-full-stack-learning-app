import { Component, OnInit } from '@angular/core';
import { ROUTING_ROUTER_TOKENS } from '../routing.routes';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
  readonly PRODUCTS_ROUTER_TOKENS = ROUTING_ROUTER_TOKENS;

  readonly customizeLink = `./${ROUTING_ROUTER_TOKENS.CUSTOMIZE}`;
  readonly notAuthLink = `./${ROUTING_ROUTER_TOKENS.NOT_AUTH}`;

  readonly outlets = {
    [ROUTING_ROUTER_TOKENS.CART]: ROUTING_ROUTER_TOKENS.CHECKOUT
  };

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation Start');
      }
    });
  }
}
