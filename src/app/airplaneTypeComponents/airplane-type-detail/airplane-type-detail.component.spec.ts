import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneTypeDetailComponent } from './airplane-type-detail.component';

describe('AirplaneTypeDetailComponent', () => {
  let component: AirplaneTypeDetailComponent;
  let fixture: ComponentFixture<AirplaneTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirplaneTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
