import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crew } from '../interfaces/crew';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class CrewDataLoadService {

  constructor(private http: HttpClient) { }

  getCrews() {
    return this.http.get<Crew[]>(BASE_URL + 'crews/');
  }

  getCrewById(id: number) {
    return this.http.get<Crew>(BASE_URL + 'crews/' + id);
  }

  addNewCrew(crew: Crew) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      pilot: crew.Pilot,
      stewardesses: crew.Stewardesses
    };
    return this.http.post<Crew>(BASE_URL + 'crews/', body, {
      headers
    });
  }

  updateCrewById(id: number, crew: Crew) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      pilot: crew.Pilot,
      stewardesses: crew.Stewardesses
    };
    return this.http.put<Crew>(BASE_URL + 'crews/' + id, body, {
      headers
    });
  }

  deleteCrewById(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Crew>(BASE_URL + 'crews/' + id);
  }
}
