import { Component, OnInit } from '@angular/core';
import { Flight } from '../../modules/shared/interfaces/flight';
import { FlightDataLoadService } from '../../modules/shared/services/flight-data-load.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  flight: Flight;
  number: string;
  isReadonly: boolean = true;

  constructor(private dataservice: FlightDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.number = this.route.snapshot.params['number'];
    this.dataservice.getFlightByNumber(this.number).subscribe(data => this.flight = data);
  }

  deleteFlight() {
    this.dataservice.deleteFlightByNumber(this.number).subscribe(result => console.log(result));
  }

  editFlight() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateFlight(number: string) {
    this.dataservice.updateFlightByNumber(number, this.flight).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
