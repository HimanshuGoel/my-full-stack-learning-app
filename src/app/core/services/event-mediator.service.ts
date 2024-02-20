import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
class EventMediator {
  // customer changed event
  private customerChangedSubject$ = new BehaviorSubject<CustomerData>(null);
  public customerChanged = this.customerChangedSubject$.asObservable();

  public notifyOnCustomerChanged(customerData: CustomerData): void {
    this.customerChangedSubject$.next(customerData);
  }

  // product changed event
  private productChangedSubject$ = new BehaviorSubject<ProductData>(null);
  public productChanged = this.productChangedSubject$.asObservable();

  public notifyOnProductChanged(productData: ProductData): void {
    this.productChangedSubject$.next(productData);
  }
}

interface CustomerData {}

interface ProductData {}

// public sendData(): void {
//     const dataToSend = new CustomerData('John', 'Doe');

//     this.eventMediator.notifyOnCustomerChanged(dataToSend);
//   }
