import { Injectable } from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs';

// union instead of enum is encouraging
enum Events {}

class EmitEvent {
  constructor(public name: Events, public value?: any) {}
}

@Injectable({ providedIn: 'root' })
class EventBus {
  private subject = new Subject<any>();

  public emit(event: EmitEvent): void {
    this.subject.next(event);
  }

  public on(event: Events, action: any): Subscription {
    return this.subject
      .pipe(
        filter((e: EmitEvent) => e.name === event),
        map((e: EmitEvent) => e.value)
      )
      .subscribe(action);
  }
}
