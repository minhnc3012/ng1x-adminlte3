import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
import { Ng1xLTE3SectionModule } from 'ng1x-adminlte3';


@NgModule({
  imports: [CommonModule, Ng1xLTE3SectionModule, WidgetsRoutingModule],
  declarations: [WidgetsComponent]
})
export class WidgetsModule {}
