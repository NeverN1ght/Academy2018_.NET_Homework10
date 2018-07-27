import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateToPilots() {
    this.router.navigate(['/dashboard/pilots']);
  }

  navigateToStewardesses() {
    this.router.navigate(['/dashboard/stewardesses']);
  }

  navigateToCrews() {
    this.router.navigate(['/dashboard/crews']);
  }

  navigateToAirplanes() {
    this.router.navigate(['/dashboard/airplanes']);
  }

  navigateToAirplaneTypes() {
    this.router.navigate(['/dashboard/airplanetypes']);
  }

  navigateToTickets() {
    this.router.navigate(['/dashboard/tickets']);
  }

  navigateToFlights() {
    this.router.navigate(['/dashboard/flights']);
  }

  navigateToDepartures() {
    this.router.navigate(['/dashboard/departures']);
  }
}
