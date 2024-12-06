import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PahlawanListPage } from './pahlawan-list.page';

const routes: Routes = [
  {
    path: '',
    component: PahlawanListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PahlawanListPageRoutingModule {}
