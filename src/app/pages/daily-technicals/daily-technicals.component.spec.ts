import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTechnicalsComponent } from './daily-technicals.component';

describe('DailyTechnicalsComponent', () => {
  let component: DailyTechnicalsComponent;
  let fixture: ComponentFixture<DailyTechnicalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTechnicalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTechnicalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
