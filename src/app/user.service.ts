/**
 * Created by rqueraud on 29/12/2016.
 */
import { Injectable } from '@angular/core';
import {User} from "./user";
import { USERS } from './mock-users';

@Injectable()
export class UserService {

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }
}
