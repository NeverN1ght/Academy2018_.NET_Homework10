import { Component, OnInit } from '@angular/core';
import { PilotDataLoadService } from '../../modules/shared/services/pilot-data-load.service';
import { Pilot } from '../../modules/shared/interfaces/pilot';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  pilot: Pilot;
  id: number;
  isReadonly: boolean = true;

  constructor(private dataservice: PilotDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getPilotById(this.id).subscribe(data => this.pilot = data);
  }

  deletePilot() {
    this.dataservice.deletePilotById(this.id).subscribe(result => console.log(result));
  }

  editPilot() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updatePilot(id: number) {
    this.dataservice.updatePilotById(id, this.pilot).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}


