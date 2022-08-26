import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-page-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    IonicModule
  ]
})
export class PeoplePageModule { }
