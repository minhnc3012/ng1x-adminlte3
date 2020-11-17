import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng1xLTE3LayoutSectionComponent, Ng1xLTE3LayoutSectionHeaderComponent, Ng1xLTE3LayoutSectionContentComponent } from './section.component';
import { RoutingService } from '../../services/routing.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [Ng1xLTE3LayoutSectionComponent, Ng1xLTE3LayoutSectionHeaderComponent, Ng1xLTE3LayoutSectionContentComponent],
    declarations: [Ng1xLTE3LayoutSectionComponent, Ng1xLTE3LayoutSectionHeaderComponent, Ng1xLTE3LayoutSectionContentComponent],
    providers: [RoutingService]
})
export class Ng1xLTE3SectionModule {}
