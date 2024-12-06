import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PahlawanFormPage } from './pahlawan-form.page';

const routes: Routes = [
  {
    path: '',
    component: PahlawanFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PahlawanFormPageRoutingModule {}
