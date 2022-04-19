import { Component, OnInit } from '@angular/core';
import { FollowingService } from 'src/app/services/following.service';
import { UserService } from 'src/app/services/user.service';
import { RequestLimitService } from 'src/app/services/request-limit.service';

@Component({
  selector: 'app-following-card',
  templateUrl: './following-card.component.html',
  styleUrls: ['./following-card.component.css'],
})
export class FollowingCardComponent implements OnInit {
  user: any;
  following!: any;
  constructor(
    private followingService: FollowingService,
    private userService: UserService,
    private requestLimitService: RequestLimitService
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => this.getFollowing(user.login));
  }

  getFollowing(username: string): void {
    this.followingService.getFollowing(username).then((following) => {
      this.following = following;
      this.requestLimitService.getRequestLimit().subscribe();
    });
  }
}
