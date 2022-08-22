import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '@project-test/models';

@Component({
  selector: 'project-test-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.less'],
})
export class PetComponent implements OnInit {

  @Input() pet!: Pet;

  constructor() {}

  ngOnInit(): void {}
}
