import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { ListadoBicisPage } from './listado-bicis.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoBicisPage,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoBicisPageRoutingModule {}
