/**
 * Created by rqueraud on 29/12/2016.
 */
import { Injectable } from '@angular/core';
import {User} from "./user";
import { USERS } from './mock-users';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:1337/contacts/';  // URL to web api

  constructor(private http: Http) { }

  getUser(id: string): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
