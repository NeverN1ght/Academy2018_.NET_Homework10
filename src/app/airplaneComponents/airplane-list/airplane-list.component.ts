import { Component, OnInit } from '@angular/core';
import { Airplane } from '../../modules/shared/interfaces/airplane';
import { AirplaneDataLoadService } from '../../modules/shared/services/airplane-data-load.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-airplane-list',
  templateUrl: './airplane-list.component.html',
  styleUrls: ['./airplane-list.component.css']
})
export class AirplaneListComponent implements OnInit {

  airplanes: Airplane[];
  isAdd: boolean = false;
  newAirplane: Airplane = {
    Id: '0',
    Name: '',
    ExploitationTerm: '',
    ReleaseDate: '',
    Type: null
  };

  constructor(private dataservice: AirplaneDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getAirplanes().subscribe(data => this.airplanes = data);
  }

  createNewAirplane() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addAirplane(form) {
    if (form.valid) {
      this.dataservice.addNewAirlane(this.newAirplane).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/airplanes/${id}`]);
  }
}
