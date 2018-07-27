import { Component, OnInit } from '@angular/core';
import { AirplaneType } from '../../modules/shared/interfaces/airplaneType';
import { AirplaneTypeDataLoadService } from '../../modules/shared/services/airplane-type-data-load.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-airplane-type-list',
  templateUrl: './airplane-type-list.component.html',
  styleUrls: ['./airplane-type-list.component.css']
})
export class AirplaneTypeListComponent implements OnInit {

  airplaneTypes: AirplaneType[];
  isAdd: boolean = false;
  newAirplaneType: AirplaneType = {
    Id: '',
    AirplaneModel: '',
    CarryingCapacity: '',
    SeatsCount: ''
  };

  constructor(private dataservice: AirplaneTypeDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getAirplaneTypes().subscribe(data => this.airplaneTypes = data);
  }

  createNewAirplaneType() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addAirplaneType(form) {
    if (form.valid) {
      this.dataservice.addNewAirplaneType(this.newAirplaneType).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/airplanetypes/${id}`]);
  }
}
