import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RepoServiceService } from 'src/app/services/repo-service.service';
import { Repo } from 'src/app/models/Repo';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css'],
})
export class RepoCardComponent implements OnInit {
  repos: Repo[] = [];
  repoError: any;

  constructor(
    private repoService: RepoServiceService,
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername(): void {
    const username = String(this.route.snapshot.paramMap.get('username'));
    this.repoService
      .getRepos(username)
      .then((repos) => {
        this.repos = repos;
        this.userService.currentRequestLimit.subscribe();
      })
      .catch((error) => (this.repoError = error));
  }
}
