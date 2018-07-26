import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PilotDataLoadService } from './services/pilot-data-load.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule, 
  ],
  declarations: [
  ],
  providers: [
    PilotDataLoadService
  ]
})
export class SharedModule { }
