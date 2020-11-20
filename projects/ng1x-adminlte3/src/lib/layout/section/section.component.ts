import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2, TemplateRef, ContentChild, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, RouterEvent } from '@angular/router';
import { RoutingService } from '../../services/routing.service';
import { removeSubscriptions } from '../../helpers';
import { Ng1xLTE3LayoutStore } from '../layout.store';

@Component({
    selector: 'mn-ng1xlte3-layout-section-header',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ng1xLTE3LayoutSectionHeaderComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

@Component({
    selector: 'mn-ng1xlte3-layout-section-content',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ng1xLTE3LayoutSectionContentComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}


@Component({
    selector: 'mn-ng1xlte3-layout-section',
    templateUrl: './section.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Ng1xLTE3LayoutSectionComponent implements OnInit, AfterViewInit, OnDestroy {
    SECTION_HEADER_HEIGHT = 57;

    @Input() fixHeader = false;
    
    private subscriptions = [];

    @ViewChild('sectionHeader', { static: true }) sectionHeader: ElementRef;
    @ViewChild('sectionContent', { static: true }) sectionContent: ElementRef;

    @ContentChild(Ng1xLTE3LayoutSectionHeaderComponent, { static: true })
    public ng1xLTE3LayoutSectionHeaderComponent: Ng1xLTE3LayoutSectionHeaderComponent;
    @ContentChild(Ng1xLTE3LayoutSectionContentComponent, { static: true })
    public ng1xLTE3LayoutSectionContentComponent: Ng1xLTE3LayoutSectionContentComponent;

    constructor(
        protected renderer: Renderer2,
        public routingService: RoutingService,
        public ng1xLTE3LayoutStore: Ng1xLTE3LayoutStore) { }

    ngOnInit() {
        this.subscriptions.push(this.routingService.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                //this.updateHeightSectionContent();
            }
        }));
        this.subscriptions.push(this.ng1xLTE3LayoutStore.appName.subscribe((value) => {
            console.log(value);            
        }));
    }

    ngAfterViewInit(): void {       
        if (this.fixHeader) { 
            this.renderer.setStyle(this.sectionHeader.nativeElement, 'height', this.SECTION_HEADER_HEIGHT + 'px');
            this.renderer.setStyle(this.sectionHeader.nativeElement, 'padding', '10px 0.5rem 10px');
            this.renderer.setStyle(this.sectionHeader.nativeElement, 'overflow', 'hidden');
            this.updateHeightSectionContent();
        }        
    }

    /**
    * @method ngOnDestroy
    */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.updateHeightSectionContent();
    }

    @HostListener('window:load', ['$event'])
    onChange(event) {        
        this.updateHeightSectionContent();
    }
    updateHeightSectionContent() { 
        if (this.fixHeader) { 
            const mainHeader = document.querySelector('.main-header');
            const mainFooter = document.querySelector('.main-footer');
            const mainHeaderHeight = mainHeader ? mainHeader.getBoundingClientRect().height : 0;
            const mainFooterHeight = mainFooter ? mainFooter.getBoundingClientRect().height : 0;

            const height = (window.innerHeight - (mainHeaderHeight + mainFooterHeight) - this.sectionHeader.nativeElement.offsetHeight);
            this.renderer.setStyle(this.sectionContent.nativeElement, 'height', height + 'px');
            this.renderer.setStyle(this.sectionContent.nativeElement, 'overflow', 'auto');
        }
        
    }
}
