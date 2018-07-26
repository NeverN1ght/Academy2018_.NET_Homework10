import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from '../interfaces/flight';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class FlightDataLoadService {

  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get<Flight[]>(BASE_URL + 'flights/');
  }

  getFlightByNumber(number: string) {
    return this.http.get<Flight>(BASE_URL + 'flights/' + number);
  }

  addNewFlight(flight: Flight) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      number: flight.Number,
      departurePoint: flight.DeparturePoint,
      destinationPoint: flight.DestinationPoint,
      arrivalTime: flight.ArrivalTime,
      tickets: flight.Tickets
    };
    return this.http.post<Flight>(BASE_URL + 'flights/', body, {
      headers
    });
  }

  updateFlightByNumber(number: string, flight: Flight) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      number: flight.Number,
      departurePoint: flight.DeparturePoint,
      destinationPoint: flight.DestinationPoint,
      arrivalTime: flight.ArrivalTime,
      tickets: flight.Tickets
    };
    return this.http.put<Flight>(BASE_URL + 'flights/' + number, body, {
      headers
    });
  }

  deleteFlightByNumber(number: string) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Flight>(BASE_URL + 'flights/' + number);
  }
}
