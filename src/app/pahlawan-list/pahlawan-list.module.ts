import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PahlawanListPageRoutingModule } from './pahlawan-list-routing.module';

import { PahlawanListPage } from './pahlawan-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PahlawanListPageRoutingModule
  ],
  declarations: [PahlawanListPage]
})
export class PahlawanListPageModule {}
