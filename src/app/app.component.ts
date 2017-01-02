import {Component} from "@angular/core/src/metadata/directives";
import {UsersComponent} from "./users.component"
/**
 * Created by rqueraud on 29/12/2016.
 */

@Component({
  selector:"app-root",
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/users">Users</a>
    </nav>
    <router-outlet></router-outlet>
`
})
export class AppComponent {
  title = 'Contact Application';
}
