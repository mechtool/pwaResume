import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { DomManipulationComponent } from "./dom-manipulation.component";

//---------------material modules------------------
import { MatCardModule } from "@angular/material";

const routes: Routes = [
    {path : '', pathMatch : 'full', component : DomManipulationComponent},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DomManipulationRoutingModule{}

@NgModule({
    declarations : [
       DomManipulationComponent
    ],
    imports : [
        CommonModule,
	DomManipulationRoutingModule,
	MatCardModule,
    ],
})
export class DomManipulationModule{}