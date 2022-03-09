import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { NavegacionComponent } from './navegacion/navegacion.component';

const routes: Routes = [
  {
    path:'',
    component:NavegacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class SharedRoutingModule{}
