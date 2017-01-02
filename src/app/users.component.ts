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

  edit(user:User) : void {
    this.router.navigate(['/detail', user.id]);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  add(name: string, company: string): void {
    name = name.trim();
    if (!name || !company) { return; }
    this.userService.create(name, company)
      .then(hero => {
        this.users.push(hero);
        this.selectedUser = null;
      });
  }

  delete(user: User): void {
    this.userService
      .delete(user.id)
      .then(() => {
        this.users = this.users.filter(u => u !== user); //Pour éviter de refaire un appel API
        if (this.selectedUser === user) { this.selectedUser = null; }
      });
  }

}
