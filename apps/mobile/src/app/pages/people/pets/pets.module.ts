import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PetsComponent],
  imports: [
    CommonModule,
    IonicModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
