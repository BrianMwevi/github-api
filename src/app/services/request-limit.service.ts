import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestLimitService {
  private requestSource = new BehaviorSubject({
    resources: {
      core: {
        limit: 60,
        used: 0,
        remaining: 60,
      },
    },
  });
  requestObject = this.requestSource.asObservable();
  constructor(private http: HttpClient) {
    this.getRequestLimit();
  }

  getRequestLimit(): Observable<any> {
    return this.http
      .get<any>(environment.requestLimit)
      .pipe(tap((requestObj) => this.requestSource.next(requestObj)));
  }
}
