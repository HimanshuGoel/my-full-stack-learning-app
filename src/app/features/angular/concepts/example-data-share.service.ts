import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharedDataService {
  private readonly currentCount$ = new BehaviorSubject<number>(1);

  public setCount(count: number): void {
    const currentValue = this.currentCount$.value;
    this.currentCount$.next(currentValue + count);
  }

  public getCount() {
    return this.currentCount$.asObservable();
  }
}
