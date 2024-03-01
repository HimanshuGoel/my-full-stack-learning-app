import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventMediator {
  private customerChangedSubject$ = new BehaviorSubject<CustomerData>(null);

  public customerChanged = this.customerChangedSubject$.asObservable();

  public notifyOnCustomerChanged(customerData: CustomerData): void {
    this.customerChangedSubject$.next(customerData);
  }

  private productChangedSubject$ = new BehaviorSubject<ProductData>(null);

  public productChanged = this.productChangedSubject$.asObservable();

  public notifyOnProductChanged(productData: ProductData): void {
    this.productChangedSubject$.next(productData);
  }
}

interface CustomerData {}

interface ProductData {}

// Usage Example
// this.eventMediator.notifyOnCustomerChanged(new CustomerData('John', 'Doe'));
