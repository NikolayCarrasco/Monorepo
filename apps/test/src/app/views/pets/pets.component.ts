import { Component, OnInit } from '@angular/core';
import { Pet } from '@project-test/models';

@Component({
  selector: 'project-test-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.less'],
})
export class PetsComponent implements OnInit {

  public pets: Pet[];

  constructor() {
    this.pets = [
      {
        id:'1',
        name: 'Denver',
        kind: 'Perro',
        age: 1
      },
      {
        id:'2',
        name: 'Layka',
        kind: 'Perro',
        age: 5
      },
      {
        id:'3',
        name: 'Max',
        kind: 'Perro',
        age: 13
      },
      {
        id:'4',
        name: 'Cookie',
        kind: 'Perro',
        age: 4
      },
      {
        id:'5',
        name: 'Perla',
        kind: 'Gato',
        age: 8
      },
      {
        id:'6',
        name: 'Michi',
        kind: 'gato',
        age: 6
      },
      {
        id:'7',
        name: 'Papaya',
        kind: 'Canario',
        age: 4
      },
      {
        id:'8',
        name: 'Firulais',
        kind: 'Perro',
        age: 9
      }
    ]
  }

  ngOnInit(): void {}
}
