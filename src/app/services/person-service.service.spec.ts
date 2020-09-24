import { TestBed } from '@angular/core/testing';
import {of } from 'rxjs'; // Add import
import {Persona} from '../model/interfaces/Persona'


import { PersonServiceService } from './person-service.service';

describe('PersonServiceService', () => {
  let service: PersonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonServiceService);
  });

  describe('methods for test',()=>{
    it('Shuld get persons from service',()=>{
      let PersonResponse=[
        {
            id:0,
            nombre:"carlos",
            edad:13
        },
        {
          id:1,
          nombre:"hernando",
          edad:13
        },
      ];
      let response:Persona[];
      spyOn(service, 'all').and.returnValue(of(PersonResponse));
      service.all().subscribe(res => {
        response = res;
      });
      expect(response).toEqual(PersonResponse);
    });
    
  });

  
});
