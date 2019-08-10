import { NgModule } from '@angular/core';
import { SampleCodeComponent } from "./sample-code/sample-code.component";

@NgModule({
  imports: [
  ],
  declarations: [
      SampleCodeComponent,
  ],
    exports : [
        SampleCodeComponent
    ]
})
export class AppCommonModule { }
