import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoBicisPageRoutingModule } from './listado-bicis-routing.module';

import { ListadoBicisPage } from './listado-bicis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoBicisPageRoutingModule
  ],
  declarations: [ListadoBicisPage]
})
export class ListadoBicisPageModule {}
