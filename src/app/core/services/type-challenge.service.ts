import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeChallengeService {
  mainMethod() {
    // getValue()
    const obj1 = { name: 'David', age: 18 };
    const values = this.getValue(obj1, 'name');
    console.log(values);
  }

  // pick implementation
  private getValue<T extends Object, K extends keyof T>(o: T, key: K): T[K] {
    return o[key];
  }
}
