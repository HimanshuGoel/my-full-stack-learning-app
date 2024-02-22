import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
