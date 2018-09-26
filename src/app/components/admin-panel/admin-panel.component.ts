import { Component } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AppServicesService } from "../../services/app-services.service";
import { Observable, Observer } from "rxjs";

@Component({
    selector : 'app-admin-panel',
    styleUrls : ['./admin-panel.component.css'],
    templateUrl : './admin-panel.component.html'
})
export class AdminPanelComponent{
    
    public loader = false;
    public obsData : Observer<any>;
    public adminData : Observable<any> = Observable.create( obs =>{
        this.obsData = obs;
    });
    
    constructor(private appService : AppServicesService, private http : HttpClient){}
    
    adminFormGroup : FormGroup = new FormBuilder().group({
	adminPass : ['', Validators.required]
    });
    
    onClickForm(f){
        this.loader = true;
        this.http.get('/adminData', {params : {pass : f[0].value}}).subscribe((data) => {
            this.loader = false;
	    console.log(data) ;
	    this.obsData.next(data);
       });
    }
}