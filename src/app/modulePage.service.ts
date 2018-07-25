import { Injectable } from '@angular/core';

<<<<<<< HEAD
import { Http, Response } from '@angular/http';
=======
import { Http,Response } from '@angular/http';
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
<<<<<<< HEAD
import {Post} from './post' ;
=======
import {Post} from './post'
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844


@Injectable()
export class ModuleServiceComponent {

<<<<<<< HEAD

 constructor(public http: Http) {

 }
   moduleServiceDetails(moduleName) {

  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('ModuleName', moduleName);



// alert(urlSearchParams+"yy")
// console.log(urlSearchParams)
=======
 
 constructor(public http:Http){

 }
   moduleServiceDetails(moduleName){

  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('moduleName', moduleName);



 	//alert(urlSearchParams+"yy")
 	//console.log(urlSearchParams)
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
    return this.http.post('/postModuleName', urlSearchParams)
      .subscribe(data => {
      console.log(data);
    });
<<<<<<< HEAD


  }


}
=======
 

  }
}
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
