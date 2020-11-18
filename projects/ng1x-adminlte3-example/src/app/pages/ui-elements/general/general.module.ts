import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from './general-routing.module';
import { GeneralComponent } from './general.component';
import { Ng1xLTE3SectionModule } from 'ng1x-adminlte3';


@NgModule({
  imports: [CommonModule, GeneralRoutingModule, Ng1xLTE3SectionModule],
  declarations: [GeneralComponent]
})
export class GeneralModule {}
