import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarBiciPageRoutingModule } from './editar-bici-routing.module';

import { EditarBiciPage } from './editar-bici.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarBiciPageRoutingModule,
    SharedModule
  ],
  declarations: [EditarBiciPage]
})
export class EditarBiciPageModule {}
