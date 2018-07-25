

<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
// import { NgZone } from '@angular/core';
=======
import { Component,OnInit } from '@angular/core';
//import { NgZone } from '@angular/core';
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

import { Router } from '@angular/router';
import {LoginServiceComponent} from './login.service';

@Component({
  selector: 'app-login',
<<<<<<< HEAD

  templateUrl: './html/login.component.html',
 providers: [LoginServiceComponent],
    // componrnt  closing
         })

export class LoginComponent implements OnInit {

    userNameDetails: string ;
    passwordDetails: string ;
    loginUserDetails: any[];
    constructor(private getData: LoginServiceComponent, private router: Router) {

    }

       ngOnInit() {



           this.getData.getLoginDetails().subscribe(allData => this.loginUserDetails = allData);

           this.checkLoginDetails ()
=======
 
  templateUrl:'./html/login.component.html',
            
           
 providers: [LoginServiceComponent],

         })//componrnt  closing

export class LoginComponent implements OnInit {
  
    userNameDetails:string ;
    passwordDetails:string ;
   
    loginUserDetails:any[];
    constructor(private getData:LoginServiceComponent,private router: Router){

    }

       ngOnInit(){



           this.getData.getLoginDetails().subscribe(allData => this.loginUserDetails=allData);
      
           this.checkLoginDetails()
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844




       }

<<<<<<< HEAD
            checkLoginDetails() {

      if ( this.userNameDetails == this.loginUserDetails[0].userName && this.passwordDetails == this.loginUserDetails[0].password){

                  this.router.navigate(['/projectSelection']);

               }
                 else {

=======
            checkLoginDetails(){
      
               if( this.userNameDetails ==this.loginUserDetails[0].userName &&this.passwordDetails==this.loginUserDetails[0].password){
                
                  this.router.navigate(['/projectSelection']); 

               }
                 else{
                   
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
                 }

           }

}
