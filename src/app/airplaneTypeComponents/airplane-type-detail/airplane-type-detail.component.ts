import { Component, OnInit } from '@angular/core';
import { AirplaneType } from '../../modules/shared/interfaces/airplaneType';
import { ActivatedRoute } from '@angular/router';
import { AirplaneTypeDataLoadService } from '../../modules/shared/services/airplane-type-data-load.service';

@Component({
  selector: 'app-airplane-type-detail',
  templateUrl: './airplane-type-detail.component.html',
  styleUrls: ['./airplane-type-detail.component.css']
})
export class AirplaneTypeDetailComponent implements OnInit {

  airplaneType: AirplaneType;
  id: number;
  isReadonly: boolean = true;

  constructor(private dataservice: AirplaneTypeDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getAirplaneTypeById(this.id).subscribe(data => this.airplaneType = data);
  }

  deleteAirplaneType() {
    this.dataservice.deleteAirplaneTypeById(this.id).subscribe(result => console.log(result));
  }

  editAirplaneType() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateAirplaneType(id: number) {
    this.dataservice.updateAirplaneTypeById(id, this.airplaneType).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
