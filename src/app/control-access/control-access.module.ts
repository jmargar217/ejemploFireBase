import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlAccessRoutingModule } from './control-access-routing.module';
import { LoginPage } from './login/login.page';
import { RegistroPage } from './registro/registro.page';



@NgModule({
  declarations: [LoginPage,RegistroPage],
  imports: [
    CommonModule,
    ControlAccessRoutingModule
  ]
})
export class ControlAccessModule { }
