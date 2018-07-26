import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../interfaces/ticket';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class TicketDataLoadService {

  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get<Ticket[]>(BASE_URL + 'tickets/');
  }

  getTicketById(id: number) {
    return this.http.get<Ticket>(BASE_URL + 'tickets/' + id);
  }

  addNewTicket(ticket: Ticket) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      price: ticket.Price,
      flightNumber: ticket.FlightNumber
    };
    return this.http.post<Ticket>(BASE_URL + 'tickets/', body, {
      headers
    });
  }

  updateTicketById(id: number, ticket: Ticket) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      price: ticket.Price,
      flightNumber: ticket.FlightNumber
    };
    return this.http.put<Ticket>(BASE_URL + 'tickets/' + id, body, {
      headers
    });
  }

  deleteTicketById(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Ticket>(BASE_URL + 'tickets/' + id, {
      headers
    });
  }
}
