import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'pahlawan-list',
    loadChildren: () => import('./pahlawan-list/pahlawan-list.module').then( m => m.PahlawanListPageModule)
  },
  {
    path: 'pahlawan-form',
    loadChildren: () => import('./pahlawan-form/pahlawan-form.module').then( m => m.PahlawanFormPageModule)
  },
  {
    path: 'pahlawan-form/:id',
    loadChildren: () => import('./pahlawan-form/pahlawan-form.module').then( m => m.PahlawanFormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
