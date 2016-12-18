import { Injectable } from '@angular/core';
import {Contact} from "./contact";
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  serverAddress : string = "http://localhost:1337"

  constructor(private http: Http) {
    console.log("Constructeur de ContactService");
  }

  getContacts(): Observable<Contact[]>{
    let contacts = this.http.get(this.serverAddress + "/contacts")
      .map(response => response.json().results.map(toContact))
    return contacts;
  }

}

function toContact(r:any):Contact{
  let contact = <Contact>({
    "username" : r.username,
    "company" : r.company
  });
  return contact;
}
