import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pet } from '@project-test/models'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPets(): Observable<Pet[]>{
    let pets: Pet[] = [];
    const response = this.http.get<Pet[]>('http://localhost:5200/api/pets').pipe(
      map(
        (data: any) => data.message
      )
    );
    response.subscribe(
      res => (pets = res)
    );
    return response;
  }
  
  getAllPetsByOwner(id: string): Observable<Pet[]>{
    let pets: Pet[] = [];
    const response = this.http.get<Pet[]>(`${'http://localhost:5200/api/pets/'}${id}`).pipe(
      map(
        (data: any) => data.message
      )
    );
    response.subscribe(
      res => (pets = res)
    );
    return response;
  }

  deletePet(id: string): Observable<Pet>{
    const response = this.http.delete<Pet>(`${'http://localhost:5200/api/pet/'}${id}`).pipe(
      map(
        (data: any) => data.message
      )
    );
    return response;
  }

}
