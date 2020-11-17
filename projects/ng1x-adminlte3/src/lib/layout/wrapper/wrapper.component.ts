import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Ng1xLTE3LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../../helpers';

@Component({
    selector: 'mn-ng1xlte3-layout-wrapper',
    templateUrl: './wrapper.component.html'
})
export class Ng1xLTE3WrapperComponent implements OnInit, OnDestroy {

    private subscriptions = [];
    private layoutType: string;
    private currentClasses: Array<string> = [];
    private currentAccentClass: string;

    constructor(
        private renderer: Renderer2,
        private ng1xLTE3LayoutStore: Ng1xLTE3LayoutStore) {
    }

    ngOnInit() {
        this.subscriptions.push(this.ng1xLTE3LayoutStore.type.subscribe(layoutType => {
            if (this.layoutType !== layoutType) {
                this.applyBodyClasses(layoutType);
            }
        }));

        this.subscriptions.push(this.ng1xLTE3LayoutStore.layoutOptions.subscribe(layoutOptions => {
            if (!layoutOptions.sidebarMenuOpened) {
                this.renderer.removeClass(document.body, 'sidebar-open');
                this.renderer.addClass(document.body, 'sidebar-collapse');
            } else {
                this.renderer.removeClass(document.body, 'sidebar-collapse');
                this.renderer.addClass(document.body, 'sidebar-open');
            }

            if (!layoutOptions.sidebarControlOpened) {
                this.renderer.removeClass(document.body, 'control-sidebar-open');
                this.renderer.addClass(document.body, 'control-sidebar-collapse');
            } else {
                this.renderer.removeClass(document.body, 'control-sidebar-collapse');
                this.renderer.addClass(document.body, 'control-sidebar-open');
            }

            if (!layoutOptions.isBodySmallText) {
                this.renderer.removeClass(document.body, 'text-sm');
            } else {
                this.renderer.addClass(document.body, 'text-sm');
            }

            if (this.currentAccentClass) {
                this.renderer.removeClass(document.body, this.currentAccentClass);
            }
            this.currentAccentClass = layoutOptions.colorVariants.accent;
            if (this.currentAccentClass) {
                this.renderer.addClass(document.body, this.currentAccentClass);
            }
        }));
    }

    /**
     * @method ngOnDestroy
     */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }

    private applyBodyClasses(cssClasses: string | Array<string>): void {
        if (typeof cssClasses === 'string') {
            cssClasses = cssClasses.split(' ');
        }

        // Remove only classes that are not in cssClasses
        const classesToRemove = this.currentClasses.filter(x => cssClasses.indexOf(x) === -1);
        classesToRemove.forEach(cssClasse => {
            if (cssClasse) {
                this.renderer.removeClass(document.body, cssClasse);
            }
        });

        // Add only classes that are not in currentClasses
        const classesToAdd = cssClasses.filter(x => this.currentClasses.indexOf(x) === -1);
        classesToAdd.forEach(cssClasse => {
            if (cssClasse) {
                this.renderer.addClass(document.body, cssClasse);
            }
        });

        // Update current classes for futur updates
        this.currentClasses = [...cssClasses];
    }
}
