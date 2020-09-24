import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from '../model/interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
   personas: Array<Persona>=[
    {
        id:0,
        nombre:"pedro",
        edad:13
    },
    {
      id:1,
      nombre:"lorena  ",
      edad:13
    },
  ];



  all(): Observable<Array<Persona>> {
    return of(this.personas);
  }

  constructor() { }
}
