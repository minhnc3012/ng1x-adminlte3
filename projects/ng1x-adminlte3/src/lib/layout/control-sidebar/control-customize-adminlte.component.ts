import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy
} from '@angular/core';
import { Ng1xLTE3LayoutStore } from '../layout.store';
import { LayoutOptions } from '../layout.config';
import { removeSubscriptions } from '../../helpers';

@Component({
    selector: 'mn-ng1xlte3-control-customize-adminlte',
    templateUrl: './control-customize-adminlte.component.html',
    styleUrls: ['./control-customize-adminlte.component.scss']
})
export class Ng1xLTE3ControlCustomizeComponent implements OnInit, AfterViewInit, OnDestroy {

    private subscriptions = [];
    public layoutOptions: LayoutOptions;

    constructor(private ng1xLTE3LayoutStore: Ng1xLTE3LayoutStore) { }

    ngOnInit() {
        this.subscriptions.push(this.ng1xLTE3LayoutStore.layoutOptions.subscribe(value => {
            this.layoutOptions = Object.assign({}, value);
        }));
    }

    ngAfterViewInit() {}

   /**
    * @method ngOnDestroy
    */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }

    setNavbarVariants(brightness, color) {
        this.layoutOptions.colorVariants.navbar.brightness = brightness;
        this.layoutOptions.colorVariants.navbar.color = color;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    setAccentColorVariants(color) {
        this.layoutOptions.colorVariants.accent = color;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    setSidebarVariants(color) {
        this.layoutOptions.colorVariants.menuSidebar = color;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    setBrandLogoVariants(color) {
        this.layoutOptions.colorVariants.brandLogo = color;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleNoNavbarBorder() {
        this.layoutOptions.isNoNavbarBorder = !this.layoutOptions.isNoNavbarBorder;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleBodySmallText() {
        this.layoutOptions.isBodySmallText = !this.layoutOptions.isBodySmallText;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleNavbarSmallText() {
        this.layoutOptions.isNavbarSmallText = !this.layoutOptions.isNavbarSmallText;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleSidebarNavSmallText() {
        this.layoutOptions.isSidebarNavSmallText = !this.layoutOptions.isSidebarNavSmallText;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleFooterSmallText() {
        this.layoutOptions.isFooterSmallText = !this.layoutOptions.isFooterSmallText;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleSidebarNavFlatStyle() {
        this.layoutOptions.isSidebarNavFlatStyle = !this.layoutOptions.isSidebarNavFlatStyle;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleSidebarNavLegacyStyle() {
        this.layoutOptions.isSidebarNavLegacyStyle = !this.layoutOptions.isSidebarNavLegacyStyle;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleSidebarNavCompact() {
        this.layoutOptions.isSidebarNavCompact = !this.layoutOptions.isSidebarNavCompact;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleSidebarNavChildIndent() {
        this.layoutOptions.isSidebarNavChildIndent = !this.layoutOptions.isSidebarNavChildIndent;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleMainSidebarDisableHoverOrFocusAutoExpand() {
        this.layoutOptions.isMainSidebarDisableHoverOrFocusAutoExpand = !this.layoutOptions.isMainSidebarDisableHoverOrFocusAutoExpand;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }

    toggleBrandSmallText() {
        this.layoutOptions.isBrandSmallText = !this.layoutOptions.isBrandSmallText;
        this.ng1xLTE3LayoutStore.setLayoutOptions(this.layoutOptions);
    }
}
