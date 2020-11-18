import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { Ng1xLTE3SectionModule } from 'ng1x-adminlte3';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, Ng1xLTE3SectionModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
