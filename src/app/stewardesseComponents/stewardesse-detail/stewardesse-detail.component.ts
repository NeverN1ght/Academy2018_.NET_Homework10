import { Component, OnInit } from '@angular/core';
import { Stewardesse } from '../../modules/shared/interfaces/stewardesse';
import { StewardesseDataLoadService } from '../../modules/shared/services/stewardesse-data-load.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-stewardesse-detail',
  templateUrl: './stewardesse-detail.component.html',
  styleUrls: ['./stewardesse-detail.component.css']
})
export class StewardesseDetailComponent implements OnInit {

  stewardesse: Stewardesse;
  id: number;
  isReadonly: boolean = true;

  constructor(private dataservice: StewardesseDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getStewardesseById(this.id).subscribe(data => this.stewardesse = data);
  }

  deleteStewardesse() {
    this.dataservice.deleteStewardesseById(this.id).subscribe(result => console.log(result));
  }

  editStewardesse() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateStewardesse(id: number) {
    this.dataservice.updateStewardesseById(id, this.stewardesse).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
