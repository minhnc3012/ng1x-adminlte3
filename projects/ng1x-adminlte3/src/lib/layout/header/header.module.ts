import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxLTE3HeaderComponent, NgxLTE3LayoutHeaderRightComponent, NgxLTE3LayoutHeaderLeftComponent } from './header.component';


@NgModule({
    imports: [CommonModule, RouterModule ],
    exports: [NgxLTE3HeaderComponent, NgxLTE3LayoutHeaderLeftComponent, NgxLTE3LayoutHeaderRightComponent],
    declarations: [NgxLTE3HeaderComponent, NgxLTE3LayoutHeaderLeftComponent, NgxLTE3LayoutHeaderRightComponent]
})
export class NgxLTE3HeaderModule { }
