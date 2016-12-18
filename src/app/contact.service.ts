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

  getContacts(){
    console.log("Méthode getContacts() de ContactService");
    return this.http.get(this.serverAddress + "/contacts")
      .map(res=> <Contact[]> res.json())
  }

}
