import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)
      },
    ]
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
