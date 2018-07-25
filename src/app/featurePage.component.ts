<<<<<<< HEAD
import { Component ,OnInit} from '@angular/core';
import{FeatureServiceComponent} from './featurePage.service'
import {ProjectDetailServiceComponent} from './pDetail.service';
import {Post} from './post';
=======
import { Component} from '@angular/core';
import{FeatureServiceComponent} from './featurePage.service'

>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
@Component({
   selector: 'app-feature',
 
  templateUrl:'./html/featurePage.component.html',

<<<<<<< HEAD
providers: [ProjectDetailServiceComponent]
=======

>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

<<<<<<< HEAD
export class FeatureComponent implements OnInit   {
  moduleDatas:Post[]; 
    featureName:string;
  

    constructor(private sendFeatureName:FeatureServiceComponent,private data:ProjectDetailServiceComponent) {
=======
export class FeatureComponent   {
 
    featureName:string;
  

    constructor(private sendFeatureName:FeatureServiceComponent) {
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
  //alert("jjj")
  
 
    }
 
 
<<<<<<< HEAD
      ngOnInit(){
  	

          this.data.projectDetails()
          .subscribe(Data => this.moduleDatas=Data, error => console.log(error));

          //console.log(this.datas)

          // this.datas=this.projectSelectionData;



      }
=======
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

   saveFeatureName(){
//alert(this.moduleName)
this.sendFeatureName.featureServiceDetails(this.featureName)

   }  


}
