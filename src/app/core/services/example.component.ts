import { BehaviorSubject, EMPTY, iif, Observable, switchMap } from 'rxjs';

import { Component, inject, Input } from '@angular/core';

import { AlbumService, Photo } from './example.service';

@Component({
  selector: 'app-root',
  template: '',
  styles: ['']
})
export class AlbumComponent {
  readonly #albumService = inject(AlbumService);

  readonly albumId$ = new BehaviorSubject<number | null>(null);
  readonly photos$: Observable<Photo[]> = this.albumId$.pipe(
    switchMap((id) => iif(() => id === null, EMPTY, this.#albumService.get(id!)))
  );

  @Input() set albumId(id: number) {
    this.albumId$.next(id);
  }
}
