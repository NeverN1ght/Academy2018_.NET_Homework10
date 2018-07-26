import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stewardesse } from '../interfaces/stewardesse';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class StewardesseDataLoadService {

  constructor(private http: HttpClient) { }

  getStewardesses() {
    return this.http.get<Stewardesse[]>(BASE_URL + 'stewardesses/');
  }

  getStewardesseById(id: number) {
    return this.http.get<Stewardesse>(BASE_URL + 'stewardesses/' + id);
  }

  addNewStewardesse(stewardesse: Stewardesse) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      firstName: stewardesse.FirstName,
      lastName: stewardesse.LastName,
      birthdate: stewardesse.Birthdate
    };
    return this.http.post<Stewardesse>(BASE_URL + 'stewardesses/', body, {
      headers
    });
  }

  updateStewardesseById(id: number, stewardesse: Stewardesse) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      firstName: stewardesse.FirstName,
      lastName: stewardesse.LastName,
      birthdate: stewardesse.Birthdate
    };
    return this.http.put<Stewardesse>(BASE_URL + 'stewardesses/' + id, body, {
      headers
    });
  }

  deleteStewardesseById(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<Stewardesse>(BASE_URL + 'stewardesses/' + id);
  }
}
