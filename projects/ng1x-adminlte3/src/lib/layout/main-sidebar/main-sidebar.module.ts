import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng1xLTE3MainSidebarComponent, Ng1xLTE3MainSidebarUserPanelComponent, Ng1xLTE3MainSidebarMenuTreeViewComponent } from './main-sidebar.component';
import { Ng1xLTE3CollapseModule } from '../../collapse/collapse.module';
import { Ng1xLTE3SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
    imports: [CommonModule, RouterModule, Ng1xLTE3CollapseModule.forRoot()],
    exports: [Ng1xLTE3MainSidebarComponent, Ng1xLTE3MainSidebarUserPanelComponent, Ng1xLTE3MainSidebarMenuTreeViewComponent, Ng1xLTE3SidebarMenuComponent],
    declarations: [Ng1xLTE3MainSidebarComponent, Ng1xLTE3MainSidebarUserPanelComponent, Ng1xLTE3MainSidebarMenuTreeViewComponent, Ng1xLTE3SidebarMenuComponent]
})
export class Ng1xLTE3MainSidebarModule {}
