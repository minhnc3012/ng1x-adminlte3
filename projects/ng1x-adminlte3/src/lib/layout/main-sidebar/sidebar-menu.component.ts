import {
    Component,
    OnInit,
    AfterViewInit,
    ChangeDetectorRef,
    Input,
    OnDestroy,
} from '@angular/core';
import { Router, PRIMARY_OUTLET, RouterEvent, NavigationEnd } from '@angular/router';
import { RoutingService } from '../../services/routing.service';
import { removeSubscriptions } from '../../helpers';
import { Ng1xLTE3LayoutStore } from '../layout.store';
import { LayoutOptions } from '../layout.config';

export interface Item {
    id: number;
    parentId: number;
    label: string;
    route?: string;
    iconClasses?: string;
    children?: Array<Item>;
    isActive?: boolean;
    isCollapsed?: boolean;
    disableCollapse?: boolean;
}

export type Items = Array<Item>;

@Component({
    selector: 'mn-ng1xlte3-sidebar-menu',
    templateUrl: './sidebar-menu.component.html'
})
export class Ng1xLTE3SidebarMenuComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() public menu: Array<any>;

    public layoutOptions: LayoutOptions;
    private activatedItems: Items = [];
    private itemsByIds: { [propKey: number]: Item } = {};
    private subscriptions = [];

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router,
        private routingService: RoutingService,
        private ng1xLTE3LayoutStore: Ng1xLTE3LayoutStore
    ) { }

    /**
     * @method ngOnInit
     */
    ngOnInit() {
        this.buildPatchMenu(this.menu);
        this.subscriptions.push(this.routingService.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                this.setMenuListeners(event.url);
            }
        }));
        this.subscriptions.push(this.ng1xLTE3LayoutStore.layoutOptions.subscribe(layoutOptions => {
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
    }

    /**
     * @method ngAfterViewInit
     */
    ngAfterViewInit() { }

    /**
     * @method ngOnDestroy
     */
    ngOnDestroy(): void {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }

  /**
   * [setMenuListeners description]
   * @method setMenuListeners
   * @param url url
   */
    setMenuListeners(url): void {
        if (url === '/') {
            this.activeItems(url);
            this.changeDetectorRef.detectChanges();
        } else {
            const primaryOutlet = this.router.parseUrl(url).root.children[PRIMARY_OUTLET];
            if (primaryOutlet) {
                this.activeItems('/' + primaryOutlet.toString());
                this.changeDetectorRef.detectChanges();
            }
        }
    }

    public getIconClasses(item: Item): string {
        let iconClasses = 'nav-icon';
        if (item.iconClasses && item.iconClasses !== '') {
            iconClasses = iconClasses + ' ' + item.iconClasses;
        } else {
            if (item.children) {
                return iconClasses + ' fas fa-circle';
            } else {
                return iconClasses + ' far fa-circle';
            }

        }
        return iconClasses;
    }

    public toggleMenu(event, item) {
        event.preventDefault();
        item.isCollapsed = !item.isCollapsed;
    }

   /**
    * [buildPatchMenu description]
    * @method buildPatchMenu
    * @param items array
    * @param parentId number
    */
    private buildPatchMenu(items: Items, parentId?: number): void {
        items.forEach((item: Item, index: number) => {
            item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;
            if (parentId) {
                item.parentId = parentId;
            }
            if (!item.disableCollapse) {
                item.isCollapsed = true;
            }
            item.isActive = false;
            if (parentId || item.children) {
                this.itemsByIds[item.id] = item;
            }
            if (item.children) {
                this.buildPatchMenu(item.children, item.id);
            }
        });
    }

  /**
   * [findItemsByUrl description]
   * @method findItemsByUrl
   * @param url string
   * @param items array
   * @param returnItems array
   */
    private findItemsByUrl(url: string, items: Items, returnItems: Items = []): Items {
        items.forEach((item: Item) => {
            if (item.route === url) {
                returnItems.push(item);
            } else if (item.children) {
                this.findItemsByUrl(url, item.children, returnItems);
            }
        });
        return returnItems;
    }

  /**
   * [activeItems description]
   * @method activeItems
   * @param url [description]
   */
    private activeItems(url: string): void {
        this.activatedItems.forEach((item: Item) => {
            item.isActive = false;
        });
        this.activatedItems = [];

        const items = this.findItemsByUrl(url, this.menu);
        items.forEach(item => {
            this.activeItem(item);
        });
    }

 /**
  * [activeItem description]
  * @method activeItem
  * @param item [description]
  */
    private activeItem(item: Item): void {
        item.isActive = true;
        this.activatedItems.push(item);
        if (item.children) {
            item.isCollapsed = false;
        }
        if (item.parentId) {
            this.activeItem(this.itemsByIds[item.parentId]);
        }
    }
}

