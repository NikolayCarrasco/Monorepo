import { Component, Input, OnInit } from '@angular/core';
import { Person } from '@project-test/models';

@Component({
  selector: 'project-test-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  
  @Input() public person!: Person[];

  ngOnInit() {
    console.log(this.person)
  }
  onclick(){
    console.log(this.person)
  }
}
