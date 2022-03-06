import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { DetallesPage } from './detalles.page';

const routes: Routes = [
  {
    path: ':id',
    component: DetallesPage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPageRoutingModule {}
