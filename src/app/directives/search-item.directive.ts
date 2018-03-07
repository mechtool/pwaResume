import { Directive, Input } from "@angular/core";
@Directive({
    selector : '[searchItem]',
})
export class SearchItemDirective{
    @Input() public searchItem : number;
}
