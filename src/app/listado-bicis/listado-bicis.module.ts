import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoBicisPageRoutingModule } from './listado-bicis-routing.module';

import { ListadoBicisPage } from './listado-bicis.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoBicisPageRoutingModule,
    SharedModule
  ],
  declarations: [ListadoBicisPage]
})
export class ListadoBicisPageModule {}
