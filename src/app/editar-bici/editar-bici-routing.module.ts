import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarBiciPage } from './editar-bici.page';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: ':id',
    component: EditarBiciPage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarBiciPageRoutingModule {}
