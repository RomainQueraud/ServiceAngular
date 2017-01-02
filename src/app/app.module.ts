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
import {AppRoutingModule} from "./app-routing.module";

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
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
