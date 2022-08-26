import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'people',
        loadChildren: () => import('./people/people.module').then( m => m.PeopleModule)
      },
      {
        path: 'pets',
        loadChildren: () => import('./pets/pets.module').then( m => m.PetsModule)
      },
      {
        path: '',
        redirectTo: '/home/people',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/people',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
