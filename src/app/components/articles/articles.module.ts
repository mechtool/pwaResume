import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ArticlesRoutingModule } from "./articles-routing.module";

import { StartPageComponent } from "./start-page/start-page.component";
//---------------material------------------------------------------------
import { MatCardModule } from "@angular/material";

@NgModule({
    declarations : [
        StartPageComponent
    ] ,
    imports : [
        CommonModule,
	ArticlesRoutingModule,
	MatCardModule,
    ]
    
})
export class ArticlesModule{
}