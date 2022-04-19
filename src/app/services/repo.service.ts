import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { lastValueFrom } from 'rxjs';

import { Repo } from '../models/Repo';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class RepoService {
  repos!: Repo[];
  constructor(private http: HttpClient, private userService: UserService) {}

  async getRepos(username: string) {
    this.repos = [];
    const value = this.http.get<Repo[]>(
      `${environment.githubApi}/users/${username}/repos?per_page=50`    );
    await lastValueFrom(value)
      .then((repos) => (this.repos = repos))
      .catch((error) => error);
    return this.repos;
    // console.log(this.repos);
  }
}
