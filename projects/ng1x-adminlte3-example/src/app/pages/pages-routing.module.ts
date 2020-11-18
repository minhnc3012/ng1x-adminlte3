import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'ui-elements',
        loadChildren: () => import('./ui-elements/ui-elements-routing.module').then(m => m.UIElementsRoutingModule)
      }
      /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
    ])
  ]
})
export class PagesRoutingModule {}
