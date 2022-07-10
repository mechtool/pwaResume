import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketComponent } from './market.component';
import {RouterModule, Routes} from "@angular/router";
import {AppCommonModule} from "../../../common/app-common.module";
import {MatCardModule} from "@angular/material/card";

const routes: Routes = [
  {path : '', pathMatch : 'full', component : MarketComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
      MatCardModule,
    AppCommonModule,
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
