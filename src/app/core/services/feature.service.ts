import { Injectable } from '@angular/core';
import { switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  public canUseFeature() {
    return true;
  }

  public getHelloUser() {
    return timer(3000).pipe(switchMap(() => 'hello user'));
  }
}
