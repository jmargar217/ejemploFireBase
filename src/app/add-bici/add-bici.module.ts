import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBiciPageRoutingModule } from './add-bici-routing.module';

import { AddBiciPage } from './add-bici.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBiciPageRoutingModule,
    SharedModule
  ],
  declarations: [AddBiciPage]
})
export class AddBiciPageModule {}
