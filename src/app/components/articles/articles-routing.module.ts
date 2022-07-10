import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//----------------module components---------------------------------
import { StartPageComponent } from "./start-page/start-page.component";


const routes: Routes = [
    {path : '', component : StartPageComponent},
    {path : '1c-market', pathMatch : 'full', loadChildren : './market/market.module#MarketModule'} ,
    {path : 'dom-manipulation', pathMatch : 'full', loadChildren : './Koretskyi/DOMManipulation/dom-manipulation.module#DomManipulationModule'} ,
    {path : 'angular-service-worker', pathMatch : 'full', loadChildren : './angular-university/angular-service-worker/angular-service-worker.module#AngularServiceWorkerModule'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }