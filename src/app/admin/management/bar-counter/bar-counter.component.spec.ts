import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCounterComponent } from './bar-counter.component';

describe('BarCounterComponent', () => {
  let component: BarCounterComponent;
  let fixture: ComponentFixture<BarCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
