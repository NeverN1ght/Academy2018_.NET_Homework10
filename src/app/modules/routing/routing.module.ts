import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { PilotListComponent } from '../../pilotComponents/pilot-list/pilot-list.component';
import { PilotDetailComponent } from '../../pilotComponents/pilot-detail/pilot-detail.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { StewardesseListComponent } from '../../stewardesseComponents/stewardesse-list/stewardesse-list.component';
import { CrewListComponent } from '../../crewComponents/crew-list/crew-list.component';
import { CrewDetailComponent } from '../../crewComponents/crew-detail/crew-detail.component';
import { TicketListComponent } from '../../ticketComponents/ticket-list/ticket-list.component';
import { TicketDetailComponent } from '../../ticketComponents/ticket-detail/ticket-detail.component';
import { AirplaneListComponent } from '../../airplaneComponents/airplane-list/airplane-list.component';
import { AirplaneDetailComponent } from '../../airplaneComponents/airplane-detail/airplane-detail.component';
import { AirplaneTypeListComponent } from '../../airplaneTypeComponents/airplane-type-list/airplane-type-list.component';
import { AirplaneTypeDetailComponent } from '../../airplaneTypeComponents/airplane-type-detail/airplane-type-detail.component';
import { FlightListComponent } from '../../flightComponents/flight-list/flight-list.component';
import { FlightDetailComponent } from '../../flightComponents/flight-detail/flight-detail.component';
import { DepartureListComponent } from '../../departureComponents/departure-list/departure-list.component';
import { DepartureDetailComponent } from '../../departureComponents/departure-detail/departure-detail.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'pilots',
        children: [
          {
            path: '',
            component: PilotListComponent
          },
          {
            path: ':id',
            component: PilotDetailComponent 
          }
        ]
      },
      {
        path: 'stewardesses',
        children: [
          {
            path: '',
            component: StewardesseListComponent
          },
          {
            path: ':id',
            component: StewardesseListComponent 
          }
        ]
      },
      {
        path: 'crews',
        children: [
          {
            path: '',
            component: CrewListComponent
          },
          {
            path: ':id',
            component: CrewDetailComponent 
          }
        ]
      },
      {
        path: 'tickets',
        children: [
          {
            path: '',
            component: TicketListComponent
          },
          {
            path: ':id',
            component: TicketDetailComponent 
          }
        ]
      },
      {
        path: 'airplanes',
        children: [
          {
            path: '',
            component: AirplaneListComponent
          },
          {
            path: ':id',
            component: AirplaneDetailComponent 
          }
        ]
      },
      {
        path: 'airplanetypes',
        children: [
          {
            path: '',
            component: AirplaneTypeListComponent
          },
          {
            path: ':id',
            component: AirplaneTypeDetailComponent 
          }
        ]
      },
      {
        path: 'flights',
        children: [
          {
            path: '',
            component: FlightListComponent
          },
          {
            path: ':number',
            component: FlightDetailComponent 
          }
        ]
      },
      {
        path: 'departures',
        children: [
          {
            path: '',
            component: DepartureListComponent
          },
          {
            path: ':id',
            component: DepartureDetailComponent 
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
