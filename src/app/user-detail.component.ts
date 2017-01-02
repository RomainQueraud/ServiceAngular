/**
 * Created by rqueraud on 29/12/2016.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {User} from "./user";
import { Location }                 from '@angular/common';
import {UserService} from "./user.service"
import 'rxjs/add/operator/switchMap';

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
    <button (click)="goBack()">Back</button>
`,
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit{

  /*
   @Input()
   */
   user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUser(+params['id']))
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }
}
