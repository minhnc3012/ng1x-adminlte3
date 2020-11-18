import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import { Ng1xLTE3SectionModule } from 'ng1x-adminlte3';


@NgModule({
  imports: [CommonModule, ButtonsRoutingModule, Ng1xLTE3SectionModule],
  declarations: [ButtonsComponent]
})
export class ButtonsModule {}
