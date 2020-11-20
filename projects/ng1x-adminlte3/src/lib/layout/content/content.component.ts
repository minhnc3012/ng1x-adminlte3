import { Component, OnInit } from '@angular/core';
import { removeSubscriptions } from '../../helpers';
import { Ng1xLTE3LayoutStore } from '../layout.store';

@Component({
    selector: 'mn-ng1xlte3-layout-content',
    templateUrl: './content.component.html'
})
export class Ng1xLTE3LayoutContenComponent implements OnInit {

    private subscriptions = [];
    public marginTop = "margin-top: calc(3.5rem + 1px);";
    constructor(public ng1xLTE3LayoutStore: Ng1xLTE3LayoutStore) { }

    ngOnInit() {
        this.subscriptions.push(this.ng1xLTE3LayoutStore.layoutOptions.subscribe((layoutOptions) => {
            if(layoutOptions.isNoNavbarBorder) {                
                this.marginTop = "margin-top: calc(3.5rem - 10px);";
            } else {
                this.marginTop = "margin-top: calc(3.5rem + 1px);";
            }
        }));
    }

    /*
    * @method ngOnDestroy
    */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}
