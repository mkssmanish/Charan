import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
import {Post} from './post'


@Injectable()
export class FeatureServiceComponent {

<<<<<<< HEAD

 constructor(public http: Http){
=======
 
 constructor(public http:Http){
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

 }
   featureServiceDetails(featureName){

  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('featureName', featureName);



 	//alert(urlSearchParams+"yy")
 	//console.log(urlSearchParams)
    return this.http.post('/postFeatureName', urlSearchParams)
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
