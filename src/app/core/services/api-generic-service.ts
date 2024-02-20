import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiHandlerService } from './api-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  constructor(private apiService: ApiHandlerService) {}
  get(endpoint: string) {
    return this.apiService.Get(`${AppSettings}` + endpoint);
  }

  post(endpoint: string, body?: any) {
    return this.apiService.Post(`${AppSettings}` + endpoint, body);
  }

  put(endpoint: string, body?: any) {
    return this.apiService.Put(`${AppSettings}` + endpoint, body);
  }

  delete(endpoint: string) {
    return this.apiService.Delete(`${AppSettings}` + endpoint, null);
  }
}

// //pass endpoint as argument
// this.GenericService.get('personalDevelopmentAreas').subscribe({
//   next: (response) => {
//     this.data = response;
//   }
// });

// this.adminService.get('schools').subscribe({
//   next: (response) => {
//     this.data = response;
//   }
// });
