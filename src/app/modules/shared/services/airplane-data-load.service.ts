import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Airplane } from '../interfaces/airplane';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AirplaneDataLoadService {

  constructor(private http: HttpClient) { }

  getAirplanes() {
    return this.http.get<Airplane>(BASE_URL + 'airplanes/');
  }

  getAirplaneById(id: number) {
    return this.http.get<Airplane>(BASE_URL + 'airplane/' + id);
  }

  addNewAirlane(airplane: Airplane) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      name: airplane.Name,
      type: airplane.Type,
      releaseDate: airplane.ReleaseDate,
      exploitationTerm: airplane.ExploitationTerm
    };
    return this.http.post<Airplane>(BASE_URL + 'airplanes/', body, {
      headers
    });
  }

  updateAirplaneById(id: number, airplane: Airplane) {
    const headers = new HttpHeaders().set('content-type', 'applications/json');
    let body = {
      name: airplane.Name,
      type: airplane.Type,
      releaseDate: airplane.ReleaseDate,
      exploitationTerm: airplane.ExploitationTerm
    };
    return this.http.put(BASE_URL + 'airplanes/' + id, body, {
      headers
    });
  }

  deleteAirplaneById(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete(BASE_URL + 'airplanes/' + id, {
      headers
    });
  }
}
