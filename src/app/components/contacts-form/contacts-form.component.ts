import { Component } from "@angular/core";
import { DataMessage, AppServicesService } from "../../services/app-services.service";
import {FormBuilder, FormGroup,  Validators} from "@angular/forms";

@Component({
    selector : 'app-contacts-form',
    styleUrls : ['./contacts-form.component.css'],
    templateUrl : './contacts-form.component.html',
})
export class ContactsFormComponent{
    
   
    contactsFormGroup : FormGroup;
	
    constructor(public formBuilder : FormBuilder, private appService : AppServicesService){
        this.startForm();
    }
    
    public onSubmitForm(f){
         this.appService.setDataServer(new DataMessage(f[0].value, f[1].value, f[2].value))
    }
    
    private startForm(){
        this.contactsFormGroup = this.formBuilder.group({
	    name : ['', Validators.required],
	    email : ['', [Validators.required, Validators.email]],
	    message : ['', [Validators.required, Validators.maxLength(300)]]
	})
    }
}