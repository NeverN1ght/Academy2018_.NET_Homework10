import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departure } from '../interfaces/departure';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class DepartureDataLoadService {

  constructor(private http: HttpClient) { }

  getDepartures() {
    return this.http.get<Departure[]>(BASE_URL + 'departures/');
  }

  getDepartureById(id: number) {
    return this.http.get<Departure>(BASE_URL + 'departures/' + id);
  }

  addNewDeaprture(departure: Departure) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      flightNumber: departure.FlightNumber,
      departureTime: departure.DepartureTime,
      crew: departure.Crew,
      airplane: departure.Airplane
    };
    return this.http.post<Departure>(BASE_URL + 'departures/', body, {
      headers
    });
  }

  updateDepartureById(id: number, departure: Departure) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      flightNumber: departure.FlightNumber,
      departureTime: departure.DepartureTime,
      crew: departure.Crew,
      airplane: departure.Airplane
    };
    return this.http.put<Departure>(BASE_URL + 'departures/' + id, body, {
      headers
    });
  }

  deleteDepartureById(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Departure>(BASE_URL + 'departures/' + id);
  }
}
