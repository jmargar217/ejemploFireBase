import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedRoutingModule } from './shared-routing.module';
import { NavegacionComponent } from './navegacion/navegacion.component';



@NgModule({
  declarations: [NavegacionComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedRoutingModule
  ],
  exports:[NavegacionComponent]
})
export class SharedModule { }
