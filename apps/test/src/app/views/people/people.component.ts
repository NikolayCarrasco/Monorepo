import { Component, OnInit } from '@angular/core';
import { Person } from '@project-test/models'

@Component({
  selector: 'project-test-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less'],
})
export class PeopleComponent implements OnInit {

  public people: Person[];

  constructor() {
    this.people = [
      {
        id: '1',
        rut: '20.477.930-9',
        name: 'Nikolay',
        lastName: 'Carrasco',
        age: 22,
        address: 'Baquedano 1316, Valparaíso, Valparaíso',
        pets: []
      },
      {
        id: '2',
        rut: '20.360.596-K',
        name: 'Anibal',
        lastName: 'Escalante',
        age: 22,
        address: 'Calle colo-colo 1130, Valparaíso, Valparaíso',
        pets: []
      },
      {
        id: '3',
        rut: '20.452.720-2',
        name: 'Eduardo',
        lastName: 'Pastor',
        age: 23,
        address: 'Maipú 1364, Quintero, Valparaíso',
        pets: []
      },
      {
        id: '4',
        rut: '20.049.995-6',
        name: 'Matias',
        lastName: 'Aguila',
        age: 5,
        address: 'Yungai 774, San Antonio, Valparaíso',
        pets: []
      }
    ]
  }

  ngOnInit(): void {}
}
