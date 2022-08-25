import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person } from '@project-test/models';
import { environment } from 'apps/test/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPeople(): Observable<Person[]>{
    let people: Person[] = [];
    const response = this.http.get<Person[]>(environment.baseUrl + '/people').pipe(
      map(
        (data: any) => data.message
      )
    );
    
    response.subscribe(
      res => (people = res)
    );
    console.log(response)
    return response;
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(environment.baseUrl + '/people/'+ id);
  }


  deletePet(id: string): Observable<Person>{
    const response = this.http.delete<Person>(`${environment.baseUrl + '/people'}${id}`).pipe(
      map(
        (data: any) => data.message
      )
    );
    return response;
  }
}
