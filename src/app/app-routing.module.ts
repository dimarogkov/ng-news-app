import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home-page.module').then(m => m.HomeModule)},
  {path: 'search', loadChildren: () => import('./pages/search/search-page.module').then(m => m.SearchModule)},
  {path: 'user', loadChildren: () => import('./pages/user/user-page.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
