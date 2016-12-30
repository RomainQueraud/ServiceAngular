/**
 * Created by rqueraud on 29/12/2016.
 */
import { Component, Input } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'user-detail',
  template: `
    <div *ngIf="user">
      <h2>{{user.name}} details :</h2>
      <div>
        <label>id:</label>{{user.id}}
      </div>
      <div>
        <label>name:</label>
        <input [(ngModel)]="user.name" placeholder="Name">
      </div>
    </div>
`
})
export class UserDetailComponent {
  @Input()
  user: User;
}
