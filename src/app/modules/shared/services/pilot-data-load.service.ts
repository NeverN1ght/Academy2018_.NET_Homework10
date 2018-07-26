import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from '../interfaces/pilot';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PilotDataLoadService {
  
  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<Pilot[]>(BASE_URL + 'pilots/');
  }

  getPilotById(id: number): Observable<Pilot> {
    return this.http.get<Pilot>(BASE_URL + 'pilots/' + id);
  }

  addNewPilot(pilot: Pilot) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      firstName: pilot.FirstName,
      lastName: pilot.LastName,
      birthdate: pilot.Birthdate,
      experience: pilot.Experience
    };
    return this.http.post<Pilot>(BASE_URL + 'pilots/', body, {
      headers
    });
  }

  updatePilotById(id: number, pilot: Pilot) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      firstName: pilot.FirstName,
      lastName: pilot.LastName,
      birthdate: pilot.Birthdate,
      experience: pilot.Experience
    };
    return this.http.put<Pilot>(BASE_URL + 'pilots/' + id, body, {
      headers
    });
  }

  deletePilotById(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Pilot>(BASE_URL + 'pilots/' + id, {
      headers
    });
  }
}
