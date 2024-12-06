import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PahlawanFormPageRoutingModule } from './pahlawan-form-routing.module';

import { PahlawanFormPage } from './pahlawan-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PahlawanFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PahlawanFormPage]
})
export class PahlawanFormPageModule {}
