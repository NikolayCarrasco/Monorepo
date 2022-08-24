import { Component, Input, OnInit } from '@angular/core';
import { Person } from '@project-test/models';

@Component({
  selector: 'project-test-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.less'],
})
export class PersonComponent implements OnInit {

  @Input() person!: Person;

  constructor() {}

  ngOnInit(): void {}
}
