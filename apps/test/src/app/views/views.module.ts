import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { PetsComponent } from './pets/pets.component';
import { PeopleComponent } from './people/people.component';
import { MenuComponent } from '../components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    PeopleComponent,
    PetsComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class ViewsModule { }
