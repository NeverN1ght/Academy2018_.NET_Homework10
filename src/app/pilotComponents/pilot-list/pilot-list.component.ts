import { Component, OnInit } from '@angular/core';
import { Pilot } from '../../modules/shared/interfaces/pilot';
import { PilotDataLoadService } from '../../modules/shared/services/pilot-data-load.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  pilots: Pilot[];
  isAdd: boolean = false;
  newPilot: Pilot = {
    Id: 0,
    FirstName: '',
    LastName: '',
    Birthdate: '',
    Experience: ''
  };

  constructor(private dataservice: PilotDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getPilots().subscribe(data => this.pilots = data);
  }

  createNewPilot() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addPilot(form) {
    if (form.valid) {
      this.dataservice.addNewPilot(this.newPilot).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/pilots/${id}`]);
  }
}
