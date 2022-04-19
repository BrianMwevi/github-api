import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, lastValueFrom, tap } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `token ${environment.token}`,
    }),
  };
  initialRequest!: any;
  private requestLimitSource = new BehaviorSubject<any>(this.initialRequest);
  currentRequestLimit = this.requestLimitSource.asObservable();

  requestLimit!: any;
  constructor(private http: HttpClient) {
    this.getRequestLimit().subscribe((data) => (this.initialRequest = data));
  }

  async getUser(username: string) {
    const value = this.http.get(
      `${environment.githubApi}/users/${username}`,
      this.httpOptions
    );
    return await lastValueFrom(value)
      .then((result) => result)
      .catch((error) => error);
  }

  getRequestLimit() {
    return this.http
      .get<any>(environment.requestLimit)
      .pipe(tap((data) => this.requestLimitSource.next(data)));
  }
}
