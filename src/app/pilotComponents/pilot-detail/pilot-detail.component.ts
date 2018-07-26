import { Component, OnInit } from '@angular/core';
import { PilotDataLoadService } from '../../modules/shared/services/pilot-data-load.service';
import { Pilot } from '../../modules/shared/interfaces/pilot';


@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  pilot: Pilot;
  id: number;

  constructor(private dataservice: PilotDataLoadService) { }

  ngOnInit() {
  }

  showPilotById(id){
    this.dataservice.getPilotById(id).subscribe(data => this.pilot = data);
  }

  addPilot() {
    //fix this later
    let pilot: Pilot = {
      Id: 0,
      FirstName: "Nicko",
      LastName: "Nikitovich",
      Birthdate: "1990-02-05T00:00:00",
      Experience: 6
    }
    this.dataservice.addNewPilot(pilot).subscribe(result => console.log(result));
  }

  deletePilot() {
    this.dataservice.deletePilotById(1).subscribe(result => console.log(result));
  }

  updatePilot() {
    let pilot: Pilot = {
      Id: 0,
      FirstName: "Fixed",
      LastName: "Fixedovich",
      Birthdate: "1990-02-05T00:00:00",
      Experience: 10
    }
    this.dataservice.updatePilotById(3, pilot).subscribe(result => console.log(result));
  }
}


