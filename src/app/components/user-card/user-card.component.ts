import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { RequestLimitService } from 'src/app/services/request-limit.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;
  @Output() selectedUser: EventEmitter<User> = new EventEmitter();
  userArray: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user.subscribe((user) => (this.user = user));
  }

  selectUser(user: User) {
    this.selectedUser.emit(user);
  }
}
