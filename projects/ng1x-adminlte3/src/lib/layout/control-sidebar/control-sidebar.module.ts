import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng1xLTE3ControlSidebarComponent } from './control-sidebar.component';
import { Ng1xLTE3ControlCustomizeComponent } from './control-customize-adminlte.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [Ng1xLTE3ControlSidebarComponent, Ng1xLTE3ControlCustomizeComponent],
    declarations: [Ng1xLTE3ControlSidebarComponent, Ng1xLTE3ControlCustomizeComponent]
})
export class Ng1xLTE3ControlSidebarModule {}
