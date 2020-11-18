import {
    Component,
    OnInit,
    AfterViewInit,
    ElementRef,
    ViewChild,
    Output,
    EventEmitter,
    TemplateRef,
    ContentChild,
    OnDestroy
} from '@angular/core';
import { Ng1xLTE3LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../../helpers';
import { LayoutOptions } from '../layout.config';

@Component({
    selector: 'mn-ng1xlte3-sidebar-user-panel',
    template: '<ng-template #templateRef><div class="user-panel mt-3 pb-3 mb-3 d-flex"><ng-content></ng-content></div></ng-template>'
})
export class Ng1xLTE3MainSidebarUserPanelComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

@Component({
    selector: 'mn-ng1xlte3-sidebar-menu-treeview',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class Ng1xLTE3MainSidebarMenuTreeViewComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

@Component({
    selector: 'mn-ng1xlte3-layout-main-sidebar',
    templateUrl: './main-sidebar.component.html',
    styleUrls: ['./main-sidebar.component.scss']
})
export class Ng1xLTE3MainSidebarComponent implements OnInit, AfterViewInit, OnDestroy {

    public logo = '#';
    public appName = 'AdminLTE 3';
    public skin: string;
    public layoutOptions: LayoutOptions;
    private subscriptions = [];

    @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('mainSidebar', { static: false }) public mainSidebar: ElementRef;

    @ContentChild(Ng1xLTE3MainSidebarUserPanelComponent, { static: true })
    public ng1xLTE3MainSidebarUserPanelComponent: Ng1xLTE3MainSidebarUserPanelComponent;
    @ContentChild(Ng1xLTE3MainSidebarMenuTreeViewComponent, { static: true })
    public ng1xLTE3MainSidebarMenuTreeViewComponent: Ng1xLTE3MainSidebarMenuTreeViewComponent;

    constructor(
        private ng1xLTE3LayoutStore: Ng1xLTE3LayoutStore
    ) { }

   /**
    * @method ngOnInit
    */
    ngOnInit() {
        this.subscriptions.push(this.ng1xLTE3LayoutStore.logo.subscribe(value => {
            this.logo = value;
        }));
        this.subscriptions.push(this.ng1xLTE3LayoutStore.appName.subscribe(value => {
            this.appName = value;
        }));
        this.subscriptions.push(this.ng1xLTE3LayoutStore.layoutOptions.subscribe(layoutOptions => {
            if (layoutOptions.colorVariants && layoutOptions.colorVariants.menuSidebar) {
                this.skin = layoutOptions.colorVariants.menuSidebar;
            } else {
                this.skin = 'dark-primary';
            }
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
    }

   /**
    * @method ngAfterViewInit
    */
    ngAfterViewInit() {
        this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
    }

   /**
    * @method ngOnDestroy
    */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}

