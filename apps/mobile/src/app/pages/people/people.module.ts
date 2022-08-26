import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    HomeComponent,
    PeopleListComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
