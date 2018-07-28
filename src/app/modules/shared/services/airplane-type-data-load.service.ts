import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AirplaneType } from '../interfaces/airplaneType';
import { BASE_URL } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AirplaneTypeDataLoadService {

  constructor(private http: HttpClient) { }

  getAirplaneTypes() {
    return this.http.get<AirplaneType[]>(BASE_URL + 'airplanetypes/');
  }

  getAirplaneTypeById(id: number) {
    return this.http.get<AirplaneType>(BASE_URL + 'airplanetypes/' + id);
  }

  addNewAirplaneType(airplaneType: AirplaneType) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = {
      airplaneModel: airplaneType.AirplaneModel,
      seatsCount: airplaneType.SeatsCount,
      carryingCapacity: airplaneType.CarryingCapacity
    };
    return this.http.post<AirplaneType>(BASE_URL + 'airplanetypes/', body, {
      headers
    });
  }

  updateAirplaneTypeById(id: number, airplaneType: AirplaneType) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    let body = airplaneType;
    return this.http.put<AirplaneType>(BASE_URL + 'airplanetypes/' + id, body, {
      headers
    });
  }

  deleteAirplaneTypeById(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.delete<AirplaneType>(BASE_URL + 'airplanetypes/' + id, {
      headers
    });
  }
}
