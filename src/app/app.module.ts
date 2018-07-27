import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../app/modules/shared/shared.module';
import { RoutingModule } from '../app/modules/routing/routing.module';

import { AppComponent } from './app.component';
import { PilotListComponent } from './pilotComponents/pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilotComponents/pilot-detail/pilot-detail.component';
import { StewardesseDetailComponent } from './stewardesseComponents/stewardesse-detail/stewardesse-detail.component';
import { StewardesseListComponent } from './stewardesseComponents/stewardesse-list/stewardesse-list.component';
import { CrewDetailComponent } from './crewComponents/crew-detail/crew-detail.component';
import { CrewListComponent } from './crewComponents/crew-list/crew-list.component';
import { AirplaneListComponent } from './airplaneComponents/airplane-list/airplane-list.component';
import { AirplaneDetailComponent } from './airplaneComponents/airplane-detail/airplane-detail.component';
import { AirplaneTypeDetailComponent } from './airplaneTypeComponents/airplane-type-detail/airplane-type-detail.component';
import { AirplaneTypeListComponent } from './airplaneTypeComponents/airplane-type-list/airplane-type-list.component';
import { TicketListComponent } from './ticketComponents/ticket-list/ticket-list.component';
import { TicketDetailComponent } from './ticketComponents/ticket-detail/ticket-detail.component';
import { FlightDetailComponent } from './flightComponents/flight-detail/flight-detail.component';
import { FlightListComponent } from './flightComponents/flight-list/flight-list.component';
import { DepartureListComponent } from './departureComponents/departure-list/departure-list.component';
import { DepartureDetailComponent } from './departureComponents/departure-detail/departure-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotListComponent,
    PilotDetailComponent,
    StewardesseDetailComponent,
    StewardesseListComponent,
    CrewDetailComponent,
    CrewListComponent,
    AirplaneListComponent,
    AirplaneDetailComponent,
    AirplaneTypeDetailComponent,
    AirplaneTypeListComponent,
    TicketListComponent,
    TicketDetailComponent,
    FlightDetailComponent,
    FlightListComponent,
    DepartureListComponent,
    DepartureDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
