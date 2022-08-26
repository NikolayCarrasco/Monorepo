import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './pages-routing.module';
import { IonicModule } from '@ionic/angular';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    IonicModule
  ]
})
export class PagesModule { }
