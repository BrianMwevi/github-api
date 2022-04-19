import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserFollowersService {
  constructor(private http: HttpClient) {}

  async getFollowers(username: string) {
    const value = this.http.get<any>(
      `${environment.githubApi}/users/${username}/followers`
    );
    return await lastValueFrom(value)
      .then((followers) => followers)
      .catch((error) => error);
  }
}
