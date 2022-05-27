import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecordsComponent } from './daily-records.component';

describe('DailyRecordsComponent', () => {
  let component: DailyRecordsComponent;
  let fixture: ComponentFixture<DailyRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
