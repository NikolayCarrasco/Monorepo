import { NgModule } from '@angular/core';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'monorepo/home',
    pathMatch: 'full'
  },
  {
    path: 'monorepo',
    loadChildren: () => import('./pages/people/people.module').then( m => m.PeopleModule)
  },
  {
    path: '**',
    redirectTo: 'monorepo/home'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
})
export class AppRoutingModule { }
