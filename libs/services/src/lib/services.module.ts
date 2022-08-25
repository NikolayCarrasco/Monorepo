import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './person/person.service';
import { PetService } from './pet/pet.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    PersonService,
    PetService
  ]
})
export class ServicesModule {}
