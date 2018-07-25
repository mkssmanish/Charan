import { Injectable } from '@angular/core';

<<<<<<< HEAD
import { Http, Response } from '@angular/http';
=======
import { Http,Response } from '@angular/http';
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

<<<<<<< HEAD

export class LoginServiceComponent {


 constructor(private _http: Http) {


 }
  getLoginDetails() {
   return this._http.get('/loginDetails')
   .map((response: Response) => response.json());

=======
export class LoginServiceComponent {

 
 constructor(private _http:Http){


 }
  getLoginDetails(){
 	
   return this._http.get("/loginDetails")
   .map((response:Response)=>response.json());
 
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
  }
}
