import { Component, OnInit } from '@angular/core';
import { Flight } from '../../modules/shared/interfaces/flight';
import { Router } from '../../../../node_modules/@angular/router';
import { FlightDataLoadService } from '../../modules/shared/services/flight-data-load.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights: Flight[];
  isAdd: boolean = false;
  newFlight: Flight = {
    Number: '',
    ArrivalTime: '',
    DeparturePoint: '',
    DestinationPoint: '',
    Tickets: []
  };

  constructor(private dataservice: FlightDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getFlights().subscribe(data => this.flights = data);
  }

  createNewFlight() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addFlight(form) {
    if (form.valid) {
      this.dataservice.addNewFlight(this.newFlight).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/flights/${id}`]);
  }
}
