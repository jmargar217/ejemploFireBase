import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBiciPageRoutingModule } from './add-bici-routing.module';

import { AddBiciPage } from './add-bici.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBiciPageRoutingModule
  ],
  declarations: [AddBiciPage]
})
export class AddBiciPageModule {}
