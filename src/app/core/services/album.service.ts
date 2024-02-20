import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({ providedIn: 'root' })
export class AlbumService {
  readonly #httpClient = inject(HttpClient);

  get(id: number): Observable<Photo[]> {
    return this.#httpClient.get<Photo[]>(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
  }
}

// export class AlbumComponent {
//   readonly #albumService = inject(AlbumService);

//   readonly albumId$ = new BehaviorSubject<number | null>(null);
//   readonly photos$: Observable<Photo[]> = this.albumId$.pipe(
//     switchMap((id) => iif(() => id === null, EMPTY, this.#albumService.get(id!)))
//   );

//   @Input() set albumId(id: number) {
//     this.albumId$.next(id);
//   }
// }
