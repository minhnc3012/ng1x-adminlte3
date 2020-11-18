import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Ng1xLTE3LayoutHeaderComponent, Ng1xLTE3LayoutHeaderRightComponent, Ng1xLTE3LayoutHeaderLeftComponent } from './header.component';


@NgModule({
    imports: [CommonModule, RouterModule ],
    exports: [Ng1xLTE3LayoutHeaderComponent, Ng1xLTE3LayoutHeaderLeftComponent, Ng1xLTE3LayoutHeaderRightComponent],
    declarations: [Ng1xLTE3LayoutHeaderComponent, Ng1xLTE3LayoutHeaderLeftComponent, Ng1xLTE3LayoutHeaderRightComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class Ng1xLTE3HeaderModule { }
