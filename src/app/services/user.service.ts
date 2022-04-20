import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, lastValueFrom } from 'rxjs';

import { RequestLimitService } from './request-limit.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private defaultUsername = 'brianmwevi';
  private userSource = new BehaviorSubject<any>(null);
  user = this.userSource.asObservable();

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: `token ${environment.token}`,
  //   }),
  // };

  constructor(
    private http: HttpClient,
    private requestLimitService: RequestLimitService
  ) {
    this.getUser(this.defaultUsername);
  }

  async getUser(username: string) {
    const value = this.http.get(`${environment.githubApi}/users/${username}`);
    return await lastValueFrom(value)
      .then((user) => {
        this.userSource.next(user);
        return [user];
      })
      .catch((error) => {
        let users: any = [];
        if (error.status === 404) {
          const data = this.searchUser(username).then((result) => {
            // If only 1 User returned
            if (result.total_count === 1) {
              this.userSource.next(result.items[0]);
              return result.items;
            }
            return (users = result.items);
          });
          return (users = data);
        }
        return users;
      });
  }

  async searchUser(username: string) {
    const value = this.http.get(
      `${environment.githubApi}/search/users?q=${username}&per_page=3&sort=joined&order=asc`
    );
    return await lastValueFrom(value)
      .then((result) => {
        this.requestLimitService.getRequestLimit().subscribe();
        return result;
      })
      .catch((error) => error);
  }
}
