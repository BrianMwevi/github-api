import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestLimitService {
  constructor(private http: HttpClient) {}

  getRequestLimit() {
    return this.http.get<any>(environment.requestLimit);
  }
}
