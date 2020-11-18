import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import { Ng1xLTE3SectionModule } from 'ng1x-adminlte3';


@NgModule({
  imports: [CommonModule, IconsRoutingModule, Ng1xLTE3SectionModule],
  declarations: [IconsComponent]
})
export class IconsModule {}
