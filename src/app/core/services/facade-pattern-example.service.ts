import { Injectable } from '@angular/core';

interface Item {}

@Injectable()
export class AuthService {
  // Authentication logic
}

@Injectable()
export class CartService {
  // Shopping cart logic
}

@Injectable()
export class PaymentService {
  // Payment logic
}

// The FacadeService provides a simplified interface to the complex system of services.
// Instead of having to interact with each service separately, the client can interact
// with the FacadeService and perform all the necessary actions.
@Injectable()
export class FacadeService {
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private paymentService: PaymentService
  ) {}

  // Simplified interface to authentication
  login(username: string, password: string) {
    return this.authService.login(username, password);
  }

  // Simplified interface to shopping cart
  addToCart(item: Item) {
    return this.cartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    return this.cartService.removeFromCart(item);
  }

  // Simplified interface to payment
  pay() {
    return this.paymentService.pay();
  }
}
