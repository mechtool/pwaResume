import {Inject, Injectable, Renderer2} from "@angular/core";
import {environment} from "../../environments/environment";
import * as firebase from "firebase";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class AppServicesService {
    
    db : any;
    auth : any;
    
    constructor(@Inject(DOCUMENT) public document : Document, public renderer : Renderer2){
	this.db = this.startFireBase();
	this.auth = firebase.auth();
    }

    public setScroll(option){ //option.element - элемент, источник значения;
	//option.content - элемент, владелец scroll
	//option.duration - продолжительность действия
	let that = this, left = 0,
	    content = option.content  ? option.content : this.document.documentElement ,
	    bounding = option.element.getBoundingClientRect(),
	    steps = option.duration / 1000 * 24;
	this.document.defaultView.requestAnimationFrame(
	    function animate() {
		that.renderer.setProperty(content, 'scrollTop', content.scrollTop + (Math.round(bounding.top / steps)));
		if(++left < steps){
		    that.document.defaultView.requestAnimationFrame(animate);
		}
	});
    } ;
    
    startFireBase(){
	firebase.initializeApp(environment.fireBaseConfig);
	return firebase.database();
    }
    getDataServer(){
	let that = this;
	return new Promise((res, rej) => {
	    that.db.ref('messages').orderByChild('dateNumber').on('value', (querySnapshot) => {
		res(querySnapshot.val());
	    })
	});
    }
    setDataServer(data){
        debugger;
	this.db.ref('messages').push(data, (err) => {
	    console.log(err ? err : 'сообщение сохранено.')
	});
    }
}
export class DataMessage{
    constructor( public name : string, public email : string, public message : string){}
}