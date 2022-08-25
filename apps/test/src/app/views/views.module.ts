import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { PetsComponent } from './pets/pets.component';
import { PeopleComponent } from './people/people.component';
import { MenuComponent } from '../components/menu/menu.component';
import { PersonComponent } from '../components/person/person.component';
import { MaterialModule } from '../../material/material.module';
import { PetComponent } from '../components/pet/pet.component';
import { ServicesModule } from '../lib/services.module';


@NgModule({
  declarations: [
    PeopleComponent,
    PetsComponent,
    MenuComponent,
    PersonComponent,
    PetComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MaterialModule
  ]
})
export class ViewsModule { }
