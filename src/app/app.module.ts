import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ProjectDetailComponent } from './pDetail.component';
import { LoginServiceComponent } from './login.service';
import { ProjectSelectionServiceComponent } from './projectSelection.service';
import {SelectionComponent } from './projectSelection.component';
import { ModuleComponent } from './module.component';
import { FeatureComponent } from './featurePage.component';
import{ModuleServiceComponent} from './modulePage.service';
import{FeatureServiceComponent} from './featurePage.service';


const appRoutes: Routes = [
{ path: '', component: LoginComponent },
 { path: 'projectDetail', component: ProjectDetailComponent,

children:[

{ path: 'CreateModule', component: ModuleComponent },

{ path: 'CreateFeature', component: FeatureComponent },

] 
},

 { path: 'projectSelection', component: SelectionComponent },

];


@NgModule({
	 imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(appRoutes)
      ,NgbModule,FormsModule
  ],
  declarations: [
   AppComponent, ProjectDetailComponent,LoginComponent,SelectionComponent,ModuleComponent,FeatureComponent],
 
 
  providers: [LoginServiceComponent,ProjectSelectionServiceComponent,ModuleServiceComponent,FeatureServiceComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
 
 //export const routingComponents = [ProjectDetailComponent];