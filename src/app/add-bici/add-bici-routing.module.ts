import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { AddBiciPage } from './add-bici.page';

const routes: Routes = [
  {
    path: '',
    component: AddBiciPage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBiciPageRoutingModule {}
