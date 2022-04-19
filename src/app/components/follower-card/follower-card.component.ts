import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FollowerService } from '../../services/follower.service';
import { Router } from '@angular/router';
import { RequestLimitService } from 'src/app/services/request-limit.service';
@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.css'],
})
export class FollowerCardComponent implements OnInit {
  user: any;
  followers!: any;
  constructor(
    private router: Router,
    private followerService: FollowerService,
    private userService: UserService,
    private requestLimitService: RequestLimitService
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => this.getFollowers(user.login));
  }

  getFollowers(username: string): void {
    this.followerService
      .getFollowers(username)
      .then((followers) => {
        this.followers = followers;
        this.requestLimitService.getRequestLimit().subscribe()

      })
      .catch((error) => {
        console.log('Followers search error: ', error);
      });
  }
}
