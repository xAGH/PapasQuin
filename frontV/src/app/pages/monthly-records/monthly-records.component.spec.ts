import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRecordsComponent } from './monthly-records.component';

describe('MonthlyRecordsComponent', () => {
  let component: MonthlyRecordsComponent;
  let fixture: ComponentFixture<MonthlyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
