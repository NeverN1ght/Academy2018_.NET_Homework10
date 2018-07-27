import { Component, OnInit } from '@angular/core';
import { Departure } from '../../modules/shared/interfaces/departure';
import { DepartureDataLoadService } from '../../modules/shared/services/departure-data-load.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  departures: Departure[];
  isAdd: boolean = false;
  newDeparture: Departure = {
    Id: '0',
    Airplane: null,
    Crew: null,
    DepartureTime: '',
    FlightNumber: ''
  };

  constructor(private dataservice: DepartureDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getDepartures().subscribe(data => this.departures = data);
  }

  createNewDeparture() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addDeparture(form) {
    if (form.valid) {
      this.dataservice.addNewDeaprture(this.newDeparture).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/departures/${id}`]);
  }
}
