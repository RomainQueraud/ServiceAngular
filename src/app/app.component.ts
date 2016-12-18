import { Component } from '@angular/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts';
  people = [
    { firstName: 'Misko', lastName: 'Hevery', company: 'Google' }
  ]

  //private contacts: Observable<Contact[]>;
  private contacts;

  constructor(private service:ContactService){
    console.log("Constructeur de AppComponent");
    setTimeout(()=>{
      console.log(this.contacts);
      this.contacts = service.getContacts();
      //service.getContacts();
      console.log("les contacts : ");
      console.log(this.contacts);
    })
  }
}
