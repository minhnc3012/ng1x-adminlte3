import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';
import { Ng1xLTE3LayoutConfig, LayoutOptions } from './layout.config';

/*
 *
 */
export class Ng1xLTE3LayoutStore {
    public readonly layoutConfig: Observable<Ng1xLTE3LayoutConfig>;

    // tslint:disable-next-line:variable-name
    private _layoutConfig: BehaviorSubject<Ng1xLTE3LayoutConfig>;
    private readonly initialLayoutConfig: Ng1xLTE3LayoutConfig = {
        logo: '',
        appName: 'Appication',
        type: 'sidebar-mini layout-fixed layout-navbar-fixed',
        layoutOptions: {
            sidebarMenuOpened: true,
            sidebarControlOpened: false,
            isBodySmallText: false,
            isNavbarSmallText: false,
            isSidebarNavSmallText: false,
            isFooterSmallText: false,
            isSidebarNavFlatStyle: false,
            isSidebarNavLegacyStyle: false,
            isSidebarNavCompact: false,
            isSidebarNavChildIndent: false,
            isMainSidebarDisableHoverOrFocusAutoExpand: false,
            isBrandSmallText: false,
            colorVariants: {
                navbar: { brightness: 'dark', color: 'primary' },
                menuSidebar: 'dark-primary',
                accent: '',
                brandLogo: ''
            }
        }
    };

    /**
     * @method constructor
     * @param layoutConfig [description]
     */
    constructor(layoutConfig: Ng1xLTE3LayoutConfig) {
        if (layoutConfig) {
            this.initialLayoutConfig = Object.assign(this.initialLayoutConfig, layoutConfig);
        }
        this._layoutConfig = new BehaviorSubject(this.initialLayoutConfig);
        this.layoutConfig = this._layoutConfig.asObservable();
    }

    get logo(): Observable<string> {
        return this.layoutConfig.pipe(pluck('logo'), distinctUntilChanged()) as Observable<string>;
    }

    /**
     * [appName description]
     * @method appName
     * @return [description]
     */
    get appName(): Observable<string> {
        return this.layoutConfig.pipe(pluck('appName'), distinctUntilChanged()) as Observable<string>;
    }

    /**
     * [appName description]
     * @method type
     * @return [description]
     */
    get type(): Observable<string> {
        return this.layoutConfig.pipe(pluck('type'), distinctUntilChanged()) as Observable<string>;
    }

    /**
     * [layoutOptions description]
     * @method layoutOptions
     * @return [description]
     */
    get layoutOptions(): Observable<LayoutOptions> {
        return this.layoutConfig.pipe(pluck('layoutOptions'), distinctUntilChanged()) as Observable<LayoutOptions>;
    }

    /**
     * [setLogo description]
     * @method setLogo
     * @param value [description]
     */
    public setLogo(value: string): void {
        this._layoutConfig.next(
            Object.assign(this._layoutConfig.value, { logo: value })
        );
    }

    /**
     * [setAppName description]
     * @method setAppName
     * @param value [description]
     */
    public setAppName(value: string): void {
        this._layoutConfig.next(
            Object.assign(this._layoutConfig.value, { appName: value })
        );
    }

    /**
     * [setType description]
     * @method setType
     * @param value [description]
     */
    public setType(value: string): void {
        this._layoutConfig.next(
            Object.assign(this._layoutConfig.value, { type: value })
        );
    }

    /**
     * [setLayoutOptions description]
     * @method setLayoutOptions
     * @param value [description]
     */
    public setLayoutOptions(value: LayoutOptions): void {
        this._layoutConfig.next(
            Object.assign(this._layoutConfig.value, { layoutOptions: value })
        );
    }
}
