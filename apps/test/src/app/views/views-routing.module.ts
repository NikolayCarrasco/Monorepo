import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'pets',
    component: PetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
