import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-sample-code',
  templateUrl: './sample-code.component.html',
  styleUrls: ['./sample-code.component.css']
})
export class SampleCodeComponent {

  @Input() public context : any;

}
