import { Component, OnInit } from '@angular/core';
import { Crew } from '../../modules/shared/interfaces/crew';
import { CrewDataLoadService } from '../../modules/shared/services/crew-data-load.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent implements OnInit {

  crew: Crew;
  id: number;
  isReadonly: boolean = true;

  constructor(private dataservice: CrewDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getCrewById(this.id).subscribe(data => this.crew = data);
  }

  deleteCrew() {
    this.dataservice.deleteCrewById(this.id).subscribe(result => console.log(result));
  }

  editCrew() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updatecrew(id: number) {
    this.dataservice.updateCrewById(id, this.crew).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
