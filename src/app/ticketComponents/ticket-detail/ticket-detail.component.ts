import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../modules/shared/interfaces/ticket';
import { TicketDataLoadService } from '../../modules/shared/services/ticket-data-load.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: Ticket;
  id: number;
  isReadonly: boolean = true;

  constructor(private dataservice: TicketDataLoadService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getTicketById(this.id).subscribe(data => this.ticket = data);
  }

  deleteTicket() {
    this.dataservice.deleteTicketById(this.id).subscribe(result => console.log(result));
  }

  editTicket() {
    if (this.isReadonly == true) {
      this.isReadonly = false;
    }
  }

  updateTicket(id: number) {
    this.dataservice.updateTicketById(id, this.ticket).subscribe(result => console.log(result));
    this.isReadonly = true;
  }
}
