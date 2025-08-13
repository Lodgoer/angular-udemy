import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], // درست شد
})
export class App {
  users = DUMMY_USERS;
  selectedUserId = signal<string | null>(null);

  onSelectUser(id: string) {
    console.log('Selected user:', id);
    this.selectedUserId.set(id);
  }
}
