import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";

import { ViewContainerRefComponent } from "./view-container-ref.component";

const routes: Routes = [
    {path : '', pathMatch : 'full', component : ViewContainerRefComponent},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewContainerRefRoutingModule{}

@NgModule({
    declarations : [
        ViewContainerRefComponent
    ],
    imports : [
        CommonModule,
	ViewContainerRefRoutingModule
    ],
})
export class ViewContainerRefModule{}