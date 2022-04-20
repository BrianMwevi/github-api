import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { RequestLimitService } from 'src/app/services/request-limit.service';
import { User } from '../../models/User';
import { Follower } from '../../models/Follower';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  user!: User;
  users!: User[];

  constructor(private userService: UserService, private router: Router, private requestLimitService: RequestLimitService) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => (this.user = user));
    this.requestLimitService.getRequestLimit().subscribe()
  }

  // Fetch user or user[]
  newSearch(username: string): void {
    this.userService
      .getUser(username)
      .then((users) => {
        if (users.length === 1) {
          this.router.navigate([`/${this.user.login}/repos`]);
        } else {
          this.users = users;
        }
      })
      .catch((error) =>
        error.status === 404
          ? `No user with username: ${username}`
          : 'Check username and try again'
      );
  }

  // Choose specific user if fetched is user[]
  selectUserFromArray(user: Follower) {
   this.newSearch(user.login)
  }
}
