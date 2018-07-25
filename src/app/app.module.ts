import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { ProjectDetailComponent } from './pDetail.component';
import { LoginServiceComponent } from './login.service';
import { ProjectSelectionServiceComponent } from './projectSelection.service';
import {SelectionComponent } from './projectSelection.component';
import { ModuleComponent } from './module.component';
import { FeatureComponent } from './featurePage.component';
import { TestExecutionComponent } from './testExecution.component';


import {ModuleServiceComponent} from './modulePage.service';
import {FeatureServiceComponent} from './featurePage.service';
import {ImportComponent} from './importPage.component';
import {ImportServiceComponent} from './importPage.service';
import {ProjectDetailServiceComponent} from './pDetail.service' ;
const appRoutes: Routes = [
{ path: '', component: LoginComponent },

 { path: 'ImportPage', component: ImportComponent },

 { path: 'projectDetail', component: ProjectDetailComponent,

children: [
=======
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
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844

{ path: 'CreateModule', component: ModuleComponent },

{ path: 'CreateFeature', component: FeatureComponent },

<<<<<<< HEAD
]
=======
] 
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
},

 { path: 'projectSelection', component: SelectionComponent },

<<<<<<< HEAD


=======
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
];


@NgModule({
<<<<<<< HEAD
imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(appRoutes)
      , NgbModule, FormsModule
  ],
  declarations: [ AppComponent, TestExecutionComponent, ProjectDetailComponent, ImportComponent, LoginComponent, SelectionComponent, ModuleComponent, FeatureComponent],


  providers: [LoginServiceComponent,ProjectDetailServiceComponent,ImportServiceComponent,ProjectSelectionServiceComponent,ModuleServiceComponent,FeatureServiceComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }

 // export const routingComponents = [ProjectDetailComponent];
=======
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
>>>>>>> 79b53e73b22a2e5966c1678610f73bb368e3e844
