import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AngularServiceWorkerComponent} from "./angular-service-worker.component";
//---------------material modules------------------
import { MatCardModule } from "@angular/material";
import {AppCommonModule} from "../../../../common/app-common.module";
//---------------local-----------------------------

const routes: Routes = [
    {path : '', pathMatch : 'full', component : AngularServiceWorkerComponent},
];

@NgModule({
    
    exports: [RouterModule],
    imports: [
    	CommonModule,
	RouterModule.forChild(routes),
	MatCardModule,
	AppCommonModule,
    ],
  declarations: [
      AngularServiceWorkerComponent,
  ]
})
export class AngularServiceWorkerModule { }
