import { Component, OnInit } from '@angular/core';
import { Crew } from '../../modules/shared/interfaces/crew';
import { CrewDataLoadService } from '../../modules/shared/services/crew-data-load.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {

  crews: Crew[];
  isAdd: boolean = false;
  newCrew: Crew = {
    Id: '',
    Pilot: null,
    Stewardesses: []
  };

  constructor(private dataservice: CrewDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getCrews().subscribe(data => this.crews = data);
  }

  createNewCrew() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addCrew(form) {
    if (form.valid) {
      this.dataservice.addNewCrew(this.newCrew).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/crews/${id}`]);
  }
}
