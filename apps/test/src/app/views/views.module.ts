import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { PetsComponent } from './pets/pets.component';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PetsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
