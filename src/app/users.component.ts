import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import { UserService } from "./user.service"

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void{
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

}