import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  defaultUser!: User;
  @Output() user: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => (this.defaultUser = user));
  }

  newSearch(username: string): void {
    this.userService
      .getUser(username)
      .then((users) => this.user.emit(users))
      .catch((error) =>
        error.status === 404
          ? `No user with username: ${username}`
          : 'Check username and try again'
      );
  }
}
