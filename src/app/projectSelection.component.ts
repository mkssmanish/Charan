<<<<<<< HEAD
import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import { Router } from '@angular/router';
import {ProjectSelectionServiceComponent} from './projectSelection.service';
// import {ProjectDetailComponent} from './pDetail.component';
import {Post} from './post';
@Component({
  selector: 'app-selection',
  templateUrl: './html/projectSelection.html' ,

   providers: [ProjectSelectionServiceComponent],
// componrnt  closing

 })

export class SelectionComponent implements OnInit, OnChanges {
   datas: Post[];
   selectedDropdown: string;
   child: string ;
   projectSelectionData = [];

   constructor(private ata: ProjectSelectionServiceComponent, private router: Router) {

=======
import { Component,OnInit,OnChanges,SimpleChanges,Input} from '@angular/core';
import { Router } from '@angular/router';
import {ProjectSelectionServiceComponent} from './projectSelection.service';
//import {ProjectDetailComponent} from './pDetail.component';
import {Post} from './post'
@Component({
  selector: 'app-selection',
  templateUrl:'./html/projectSelection.html' ,

   providers: [ProjectSelectionServiceComponent],

    


 })//componrnt  closing

export class SelectionComponent implements OnInit, OnChanges {
   datas:Post[]; 
   selectedDropdown:string; 
   child:string
   projectSelectionData=[];

   constructor(public ata:ProjectSelectionServiceComponent,private router: Router){
	
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

   }


<<<<<<< HEAD
      ngOnInit() {


          this.ata.getProjectSelectionDetails()
          .subscribe(llData => this.datas = llData, error => console.log(error));

          console.log(this.datas) ;

          // this.datas=this.projectSelectionData;
=======
      ngOnInit(){
  	

          this.ata.getProjectSelectionDetails()
          .subscribe(llData => this.datas=llData, error => console.log(error));

          console.log(this.projectSelectionData)

           this.datas=this.projectSelectionData;
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844



      }


<<<<<<< HEAD
          dropdownData(dataSelected) {

            sessionStorage.setItem('key', this.selectedDropdown);
=======
          dropdownData(dataSelected){

            sessionStorage.setItem('key',this.selectedDropdown);
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
             this.router.navigate(['/projectDetail']);

          }

<<<<<<< HEAD
             ngOnChanges() {
=======
             ngOnChanges(){
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844


             }








<<<<<<< HEAD
}
=======
}
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
