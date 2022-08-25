import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonService } from './person/person.service';
import { PetService } from './pet/pet.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
 /*  providers: [
    PersonService,
    PetService
  ] */
})
export class ServicesModule {}
