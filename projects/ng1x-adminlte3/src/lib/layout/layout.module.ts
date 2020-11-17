import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoutingService } from '../services/routing.service';
import { Ng1xLTE3LayoutConfig } from './layout.config';
import { ng1xLTE3LayoutProvider } from './layout.provider';
import { Ng1xLTE3LayoutStore } from './layout.store';
import { Ng1xLTE3WrapperModule } from './wrapper/wrapper.module';
import { Ng1xLTE3ContentModule } from './content/content.module';
import { NgxLTE3HeaderModule } from './header/header.module';
import { Ng1xLTE3FooterModule } from './footer/footer.module';
import { Ng1xLTE3ControlSidebarModule } from './control-sidebar/control-sidebar.module';
import { Ng1xLTE3MainSidebarModule } from './main-sidebar/main-sidebar.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule],
    exports: [
        NgxLTE3HeaderModule,
        Ng1xLTE3MainSidebarModule,
        Ng1xLTE3WrapperModule,
        Ng1xLTE3ContentModule,
        Ng1xLTE3ControlSidebarModule,
        Ng1xLTE3FooterModule
    ],
    providers: [RoutingService]
})
export class Ng1xLTE3LayoutModule {
    /**
     * @method constructor
     * @param parentModule NgxLTE3LayoutModule
     */
    constructor(@Optional() @SkipSelf() parentModule: Ng1xLTE3LayoutModule) {
        if (parentModule) {
            throw new Error('NgxLTE3LayoutModule is already loaded. Import it in the AppModule only!');
        }
    }

    /**
     * [forRoot description]
     * @method forRoot
     * @param  layoutConfig [description]
     * @return [description]
     */
    static forRoot(layoutConfig: Ng1xLTE3LayoutConfig): ModuleWithProviders<any> {
        return {
            ngModule: Ng1xLTE3LayoutModule,
            providers: [...ng1xLTE3LayoutProvider(layoutConfig), Ng1xLTE3LayoutStore]
        };
    }
}
