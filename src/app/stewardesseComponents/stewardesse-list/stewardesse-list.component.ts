import { Component, OnInit } from '@angular/core';
import { Stewardesse } from '../../modules/shared/interfaces/stewardesse';
import { StewardesseDataLoadService } from '../../modules/shared/services/stewardesse-data-load.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-stewardesse-list',
  templateUrl: './stewardesse-list.component.html',
  styleUrls: ['./stewardesse-list.component.css']
})
export class StewardesseListComponent implements OnInit {

  stewardesses: Stewardesse[];
  isAdd: boolean = false;
  newStewardesse: Stewardesse = {
    Id: '',
    FirstName: '',
    LastName: '',
    Birthdate: '',
  };

  constructor(private dataservice: StewardesseDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getStewardesses().subscribe(data => this.stewardesses = data);
  }

  createNewStewardesse() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addStewardesse(form) {
    if (form.valid) {
      this.dataservice.addNewStewardesse(this.newStewardesse).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/stewardesses/${id}`]);
  }
}
