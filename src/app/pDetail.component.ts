import { Component, Input,OnInit} from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectDetailServiceComponent } from './pDetail.service';
import {Post} from './post';
import {SelectionComponent} from './projectSelection.component';



@Component({
   selector: 'app-detail',

  templateUrl:'./html/projectDetail.html',

   styleUrls: ['./css/pDetail.component.css'],

      providers: [ProjectDetailServiceComponent]
=======
import {SelectionComponent} from './projectSelection.component';
import { ActivatedRoute, Router } from '@angular/router';
//import { ModuleComponent } from './module.component';
@Component({
   selector: 'app-detail',
 
  templateUrl:'./html/projectDetail.html',

   styleUrls: ['./pDetail.component.css'],

       
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

})//componrnt  closing

export class ProjectDetailComponent implements OnInit  {
<<<<<<< HEAD
   moduleChild:Post[];
  // moduleId:Post[];
moduleName:Post[];
    projectName:string;
 //moduleChild:any[]=[];
 indexvalue:number;

 message:string;
    show: boolean;
testExecution:boolean;
displayModule:boolean;
displayFeature: boolean;
displayImport:boolean;
//selectedModule:any;


    constructor(private router: Router,private route:ActivatedRoute,private module:ProjectDetailServiceComponent) {
    this.show = false;
 this.testExecution=false;
 this.displayModule=false;
 this.displayFeature=false;
 this.displayImport=false;
    }



      ngOnInit(){
//var index=0;

             let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
             this.projectName=dataFromProjectSelectionDropdown;
            this.module.projectDetails().subscribe(moduleData =>this.moduleName=moduleData;console.log(this.moduleName));
  // this.module.childModuleDetails(index)
  //   .subscribe(moduleData =>{this.oduleChild=moduleData;console.log(this.oduleChild) });
  //     //console.log(this.moduleChild)
      }

   showDropDown:boolean;

manualtoggle(index){

//alert(index+"000")


this.module.childModuleDetails(index)
.subscribe(moduleData =>{this.moduleChild=moduleData;this.indexvalue=this.moduleChild[0].moduleId;console.log(this.moduleChild[0].moduleId);console.log(this.moduleChild) });
//alert(this.oduleChild.length)

// for (let i = 0; i <=this.moduleChild.length; i++) {

  //alert(typeof(this.oduleChild[i].featureName)+this.oduleChild[i].featureName)
  //console.log(this.moduleChild[i].moduleId)

  //this.indexvalue=this.moduleChild[i].moduleId;
  //this.showDropDown=!this.showDropDown;
  //alert(this.showDropDown)
  // this.moduleChild=this.oduleChild;
 //alert(typeof(this.oduleChild[i].moduleId)+this.oduleChild[i].moduleId)
 //var i=0;
 //this.indexvalue=this.moduleChild[i].moduleId

 //alert(this.indexvalue)

  // }
//  if(index==this.indexvalue){


// //console.log(this.moduleChild.featureName)
//   }

}






        changeShowStatus(){
//alert( this.show)
           this.show = true;
           this.testExecution=false;

        }

        showTestExecution(){
//alert("2")
this.show = false;
   this.testExecution=true;
        }

        goCreateModule(){
          //var displayModule:string
          this.displayModule=true;
          this.displayFeature=false;
          this.displayImport=false;
          //alert("yy")
          //this.router.navigate(['CreateModule'],{relativeTo:this.route})
        }
           goCreateFeature(){
          this.displayFeature=true;
          this.displayModule=false;
          this.displayImport=false;
        }
       goImport(){
         //alert("1st")
          this.displayImport=true;
          this.displayModule=false;
          this.displayFeature=false;
        }

=======
 

    projectName:string;


    show: boolean;

    constructor(private router: Router,private route:ActivatedRoute) {
    this.show = false;
 
    }
 
 

      ngOnInit(){


             let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
             this.projectName=dataFromProjectSelectionDropdown;

      }
 
    message:string;
 
        changeShowStatus(){

           this.show = true;
 
        }

        goCreateModule(){
          this.router.navigate(['CreateModule'],{relativeTo:this.route})
        }
           goCreateFeature(){
          this.router.navigate(['CreateFeature'],{relativeTo:this.route})
        }


>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
}
