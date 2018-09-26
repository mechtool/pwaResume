import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//----------------module components---------------------------------
import { StartPageComponent } from "./start-page/start-page.component";
import {DomManipulationModule} from "./Koretskyi/DOMManipulation/dom-manipulation.module";


const routes: Routes = [
    {path : '', component : StartPageComponent},
    {path : 'view-container-ref', pathMatch : 'full', loadChildren : './ViewContainerRef/view-container-ref.module#ViewContainerRefModule'} ,
    {path : 'dom-manipulation', pathMatch : 'full', loadChildren : './Koretskyi/DOMManipulation/dom-manipulation.module#DomManipulationModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }