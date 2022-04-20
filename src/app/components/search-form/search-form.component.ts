import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  username: string = '';
  @Output() newSearch: EventEmitter<any> = new EventEmitter();
  showProfileModal: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(username: string): void {
    if (username.length > 1) {
      console.log(username);

      // this.newSearch.emit(username);
      // this.username = '';
    }
  }
}
