

import { Component,OnInit } from '@angular/core';
//import {  RouterModule, Routes   } from '@angular/router';

//import { Router } from '@angular/router'; 
//import { Location } from '@angular/common';
//import { Directive } from '@angular/core';
import { LoginComponent } from './login.component';
import { SelectionComponent } from './projectSelection.component';
import {LoginServiceComponent} from './login.service';
import {ProjectDetailComponent} from './pDetail.component';

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
   
   

}
