/**
 * Created by rqueraud on 29/12/2016.
 */
import { Injectable } from '@angular/core';
import {User} from "./user";
import { USERS } from './mock-users';
import {Http} from "@angular/http";

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:1337/contacts/';  // URL to web api

  constructor(private http: Http) { }

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }
}
