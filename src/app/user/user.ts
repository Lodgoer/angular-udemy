import { Component, Output, Input, EventEmitter } from '@angular/core';

// type UserObj = { // id: string; // avatar: string; // name: string; // };

interface UserObj {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  @Input({ required: true }) user!: UserObj;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
