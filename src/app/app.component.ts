<<<<<<< HEAD


import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import {  RouterModule, Routes   } from '@angular/router';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Directive } from '@angular/core';
=======


import { Component,OnInit } from '@angular/core';
//import {  RouterModule, Routes   } from '@angular/router';

//import { Router } from '@angular/router'; 
//import { Location } from '@angular/common';
//import { Directive } from '@angular/core';
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
import { LoginComponent } from './login.component';
import { SelectionComponent } from './projectSelection.component';
import {LoginServiceComponent} from './login.service';
import {ProjectDetailComponent} from './pDetail.component';
<<<<<<< HEAD
import {ImportComponent} from './importPage.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
   { path: 'projectDetail', component: ProjectDetailComponent  },
 { path: 'projectSelection', component: SelectionComponent  },
  { path: 'ImportPage', component: ImportComponent },

];
@Component({
  selector: 'app-root',

   templateUrl: './html/app.component.html',

 // providers: [LoginServiceComponent],
     // component closing
         })

export class AppComponent {


=======

// export const appRoutes: Routes = [
//   { path: '', component: LoginComponent },
//    { path: 'projectDetail', component: ProjectDetailComponent  },
//  { path: 'projectSelection', component: SelectionComponent  }
  
// ];
@Component({
  selector: 'app-root',
 
   templateUrl:'./html/app.component.html',
            
           
 // providers: [LoginServiceComponent],

         })//componrnt  closing

export class AppComponent {
   
   
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

}
