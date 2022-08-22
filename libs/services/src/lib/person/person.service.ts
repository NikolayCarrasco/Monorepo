import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Person } from '@project-test/models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPeople(): Observable<Person[]>{
    let people: Person[] = [];
    const response = this.http.get<Person[]>('http://localhost:5200/api/people').pipe(
      map(
        (data: any) => data.message
      )
    );
    response.subscribe(
      res => (people = res)
    );
    return response;
  }

  deletePet(id: string): Observable<Person>{
    const response = this.http.delete<Person>(`${'http://localhost:5200/api/person/'}${id}`).pipe(
      map(
        (data: any) => data.message
      )
    );
    return response;
  }
}
