import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../modules/shared/interfaces/ticket';
import { TicketDataLoadService } from '../../modules/shared/services/ticket-data-load.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[];
  isAdd: boolean = false;
  newTicket: Ticket = {
    Id: '',
    FlightNumber: '',
    Price: ''
  };

  constructor(private dataservice: TicketDataLoadService, private router: Router) { }

  ngOnInit() {
    this.dataservice.getTickets().subscribe(data => this.tickets = data);
  }

  createNewTicket() {
    if (this.isAdd == false) {
      this.isAdd = true;
    }
    else {
      this.isAdd = false;
    }
  }

  addTicket(form) {
    if (form.valid) {
      this.dataservice.addNewTicket(this.newTicket).subscribe(result => console.log(result));
      this.isAdd = false;
    } else {
      console.log("not valid");
    }
  }

  navigateToDetail(id: number) {
    this.router.navigate([`/dashboard/tickets/${id}`]);
  }
}
