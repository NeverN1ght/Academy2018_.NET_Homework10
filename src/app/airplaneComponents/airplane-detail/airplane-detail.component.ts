import { Component, OnInit } from '@angular/core';
import { Airplane } from '../../modules/shared/interfaces/airplane';
import { ActivatedRoute } from '@angular/router';
import { AirplaneDataLoadService } from '../../modules/shared/services/airplane-data-load.service';

@Component({
  selector: 'app-airplane-detail',
  templateUrl: './airplane-detail.component.html',
  styleUrls: ['./airplane-detail.component.css']
})
export class AirplaneDetailComponent implements OnInit {

  airplane: Airplane;
  id: number;
  isReadonly: boolean = true;

  constructor(private dataservice: AirplaneDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getAirplaneById(this.id).subscribe(data => this.airplane = data);
  }

  deleteAirplane() {
    this.dataservice.deleteAirplaneById(this.id).subscribe(result => console.log(result));
  }

  editAirplane() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateAirplane(id: number) {
    this.dataservice.updateAirplaneById(id, this.airplane).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
