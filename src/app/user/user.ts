import { Component, Output, Input, EventEmitter } from '@angular/core';

import { type UserObj } from './user.model';
import { Card } from '../shared/card/card';
@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
  imports: [Card],
})
export class User {
  @Input({ required: true }) user!: UserObj;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
