import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule  } from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from "@angular/common/http";
import { environment } from '../environments/environment';

//----------------locals-----------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechStackComponent } from "./components/tech-stack/tech-stack.component";
import { SearchItemDirective } from "./directives/search-item.directive";
import { ContactsFormComponent } from "./components/contacts-form/contacts-form.component";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";

//-----------services------------------------------------------
//----------material modules--------------------------------------
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule} from "@angular/material";
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyALHdjufpTuwLNc6x3r1riiBcq3P5LGnE4",
  authDomain: "resume-4cb3d.firebaseapp.com",
  databaseURL: "https://resume-4cb3d.firebaseio.com",
  projectId: "resume-4cb3d",
  storageBucket: "resume-4cb3d.appspot.com",
  messagingSenderId: "282908447778",
  appId: "1:282908447778:web:51669d031773673bfe667b"
};

/*
firebase.initializeApp(firebaseConfig);
*/


@NgModule({
  declarations: [
    AppComponent,
    ContactsFormComponent,
    TechStackComponent,
    AdminPanelComponent,
    SearchItemDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }) ,
    //--------material--------------------------
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
