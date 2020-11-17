import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutOptions } from '../layout.config';
import { Ng1xLTE3LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../../helpers';

@Component({
    selector: 'mn-ng1xlte3-layout-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class Ng1xLTE3FooterComponent implements OnInit, OnDestroy {

    public layoutOptions: LayoutOptions;
    private subscriptions = [];

    constructor(private ng1xLTE3LayoutStore: Ng1xLTE3LayoutStore) { }

    /**
     * @method ngOnInit
     */
    ngOnInit() {
        this.subscriptions.push(this.ng1xLTE3LayoutStore.layoutOptions.subscribe(layoutOptions => {
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
    }

    /**
     * @method ngOnInit
     */
   ngOnDestroy() {
    this.subscriptions = removeSubscriptions(this.subscriptions);
}
}
