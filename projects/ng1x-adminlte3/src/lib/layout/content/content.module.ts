import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng1xLTE3LayoutContenComponent } from './content.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [Ng1xLTE3LayoutContenComponent],
    declarations: [Ng1xLTE3LayoutContenComponent]
})
export class Ng1xLTE3ContentModule {}
