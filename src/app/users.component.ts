import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import { UserService } from "./user.service"
import {Router} from "@angular/router"

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users: User[];
  selectedUser: User;

  constructor(private router:Router, private userService: UserService) { }

  ngOnInit(): void{
    this.getUsers();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

}
