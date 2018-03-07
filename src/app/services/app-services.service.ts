import {Inject, Injectable, Renderer2} from "@angular/core";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class AppServicesService{

    constructor(@Inject(DOCUMENT) public document : Document, public renderer : Renderer2){}

    public setScroll(option){ //option.element - элемент, источник значения;
	//option.content - элемент, владелец scroll
	//option.duration - продолжительность действия
	let that = this, left = 0,
	    content = option.content  ? option.content : this.document.documentElement ,
	    bounding = option.element.getBoundingClientRect(),
	    steps = option.duration / 1000 * 24;
	this.document.defaultView.requestAnimationFrame(function animate() {
	    that.renderer.setProperty(content, 'scrollTop', content.scrollTop + (Math.round(bounding.top / steps)));
	    if(++left < steps){
		that.document.defaultView.requestAnimationFrame(animate);
	    }
	});
    } ;
}