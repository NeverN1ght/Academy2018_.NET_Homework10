import { Component, OnInit } from '@angular/core';
import { Departure } from '../../modules/shared/interfaces/departure';
import { DepartureDataLoadService } from '../../modules/shared/services/departure-data-load.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-detail.component.html',
  styleUrls: ['./departure-detail.component.css']
})
export class DepartureDetailComponent implements OnInit {

  departure: Departure;
  id: number;
  isReadonly: boolean = true;

  constructor(private dataservice: DepartureDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getDepartureById(this.id).subscribe(data => this.departure = data);
  }

  deleteDeparture() {
    this.dataservice.deleteDepartureById(this.id).subscribe(result => console.log(result));
  }

  editDeparture() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateDeparture(id: number) {
    this.dataservice.updateDepartureById(id, this.departure).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
