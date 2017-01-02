import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserDetailComponent } from './user-detail.component'

import { AppComponent } from './app.component';
import {UsersComponent} from "./users.component";
import {UserService} from "./user.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: UserDetailComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
