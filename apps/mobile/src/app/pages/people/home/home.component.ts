import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Person } from '@project-test/models';
import { PersonService } from '@project-test/services';

@Component({
  selector: 'project-test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public people: Person[];
  constructor(
    private personService: PersonService,
  ) { 
    this.people = []
  }

  async ngOnInit() {
    await this.fetchPeople()
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
}
