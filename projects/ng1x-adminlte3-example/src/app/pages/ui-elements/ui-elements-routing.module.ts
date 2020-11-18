import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'general'
      },
      {
        path: 'general',
        loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)
      }
      /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
    ])
  ]
})
export class UIElementsRoutingModule {}
