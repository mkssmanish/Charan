import { Component} from '@angular/core';
import{ModuleServiceComponent} from './modulePage.service'

@Component({
<<<<<<< HEAD
    selector: 'app-module',
=======
   selector: 'app-module',
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
 
  templateUrl:'./html/modulePage.component.html',


   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class ModuleComponent   {
 
    moduleName:string;
  

    constructor(private sendModuleName:ModuleServiceComponent) {
  //alert("jjj")
  
 
    }
 
 

   saveModuleName(){
//alert(this.moduleName)
this.sendModuleName.moduleServiceDetails(this.moduleName)

   }  


}
