import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '@project-test/models'
import { PersonService } from '@project-test/services';
@Component({
  selector: 'project-test-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less'],
})
export class PeopleComponent implements OnInit {

  public people: Person[] = [];
  public id: string;
  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];

  }

  async fetchPeople(){
    try {
      const response: any = await this.personService.getAllPeople().toPromise();
      console.log(response)
      this.people = response
    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  }

  /* async fetchGetProduct() {
    try {
      const response: any = await this.personService.getPerson(this.id).toPromise();
      this.people = response.message;
      

    }
    catch (error) {
      console.log('Algo ha salido mal');
    }
  } */

  ngOnInit(): void {
    this.fetchPeople()
  }
}
