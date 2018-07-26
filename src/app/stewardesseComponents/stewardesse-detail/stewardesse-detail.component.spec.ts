import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardesseDetailComponent } from './stewardesse-detail.component';

describe('StewardesseDetailComponent', () => {
  let component: StewardesseDetailComponent;
  let fixture: ComponentFixture<StewardesseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardesseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardesseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
