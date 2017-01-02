/**
 * Created by rqueraud on 30/12/2016.
 */
import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
  selector: 'my-dashboard',
  template: `
    <h3>Top Users</h3>
    <div class="grid grid-pad">
      <a *ngFor="let user of users" [routerLink]="['/detail', user.id]" class="col-1-4">
        <div class="module user">
          <h4>{{user.name}}</h4>
        </div>
      </a>
    </div>
`
})
export class DashboardComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .then(users => this.users = users.slice(1, 5));
  }
}
