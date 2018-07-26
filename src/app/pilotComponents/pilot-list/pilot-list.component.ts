import { Component, OnInit } from '@angular/core';
import { Pilot } from '../../modules/shared/interfaces/pilot';
import { PilotDataLoadService } from '../../modules/shared/services/pilot-data-load.service';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  pilots: Pilot[];

  constructor(private dataservice: PilotDataLoadService) { }

  ngOnInit() {
    this.dataservice.getPilots().subscribe(data => this.pilots = data);
  }
}
