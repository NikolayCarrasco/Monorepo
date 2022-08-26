import { Component, OnInit } from '@angular/core';
import { Person } from '@project-test/models';
import { PersonService } from '@project-test/services';

@Component({
  selector: 'project-test-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  
  public people: Person[];
  constructor(
    private personService: PersonService,
  ) { 
    this.people = []
  }

  ngOnInit() {
    console.log()
  }


  /* async fetchPeople(){
    try {
      const response: any = await this.personService.getAllPeople().toPromise();
      console.log(response)
      this.people = response
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  } */
}
