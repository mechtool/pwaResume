
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechStackComponent } from "./components/tech-stack/tech-stack.component";
import { SearchItemDirective } from "./directives/search-item.directive";

//----------material modules--------------------------------------
import {MatButtonModule, MatIconModule, MatToolbarModule} from "@angular/material";
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    TechStackComponent,
    SearchItemDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) ,
    //--------material--------------------------
    MatButtonModule,
    MatIconModule,
      MatToolbarModule,
      MatCardModule,
      FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
