import { NgModule, ModuleWithProviders } from '@angular/core';

import { Ng1xLTE3CollapseDirective } from './collapse.directive';

@NgModule({
  declarations: [Ng1xLTE3CollapseDirective],
  exports: [Ng1xLTE3CollapseDirective]
})
export class Ng1xLTE3CollapseModule {
  static forRoot(): ModuleWithProviders<any> {
    return { ngModule: Ng1xLTE3CollapseModule, providers: [] };
  }
}
