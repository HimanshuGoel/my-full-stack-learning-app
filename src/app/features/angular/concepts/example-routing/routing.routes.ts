import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { FeatureService } from '../../../core/services/example-can-use-feature.service';
import { CartComponent } from './cart/cart.component';
import { ProductsCustomizeComponent } from './products-customize/products-customize.component';
import { ProductsNotAuthComponent } from './products-not-auth/products-not-auth.component';

export enum ROUTING_ROUTER_TOKENS {
  CART = 'cart',
  CHECKOUT = 'checkout',
  CUSTOMIZE = 'customize',
  NOT_AUTH = 'not-auth',
  CUSTOMIZE_ID = 'customize/:categoryId'
}

export const ROUTING_ROUTES: Routes = [
  {
    path: ROUTING_ROUTER_TOKENS.CUSTOMIZE_ID,
    component: ProductsCustomizeComponent
  },
  {
    path: ROUTING_ROUTER_TOKENS.CHECKOUT,
    outlet: ROUTING_ROUTER_TOKENS.CART,
    component: CartComponent
  },
  {
    path: ROUTING_ROUTER_TOKENS.NOT_AUTH,
    component: ProductsNotAuthComponent,
    canMatch: [
      () => {
        const featureService = inject(FeatureService);
        return featureService.canUseFeature();
      }
    ],
    canActivate: [authRouteGuard(ROUTING_ROUTER_TOKENS.NOT_AUTH)],
    resolve: {
      userHello: () => {
        const featureService = inject(FeatureService);
        return featureService.getHelloUser();
      }
    }
  }
];

// we can also return either boolean or router parse tree
function authRouteGuard(route: string) {
  return () => {
    const router = inject(Router);
    return true;
  };
}
