import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardesseListComponent } from './stewardesse-list.component';

describe('StewardesseListComponent', () => {
  let component: StewardesseListComponent;
  let fixture: ComponentFixture<StewardesseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardesseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StewardesseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
