import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticlesRoutingModule } from "./articles-routing.module";

import { StartPageComponent } from "./start-page/start-page.component";

@NgModule({
    declarations : [
        StartPageComponent
    ] ,
    imports : [
        CommonModule,
	ArticlesRoutingModule,
    ]
    
})
export class ArticlesModule{}