import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FollowingService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `token ${environment.token}`,
    }),
  };
  constructor(private http: HttpClient) {}

  async getFollowing(username: string) {
    const value = this.http.get<any>(
      `${environment.githubApi}/users/${username}/following`,
      this.httpOptions
    );
    return await lastValueFrom(value)
      .then((followers) => followers)
      .catch((error) => error);
  }
}
