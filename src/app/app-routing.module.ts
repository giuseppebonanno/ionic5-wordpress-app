import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren:() => import( './tabs/tabs.module').then( m => m.TabsPageModule) },
  //{ path: 'kategoria/:id', loadChildren: '../tab4/tab4.module#Tab4PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
