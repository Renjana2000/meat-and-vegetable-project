import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinjalComponent } from './brinjal.component';

describe('BrinjalComponent', () => {
  let component: BrinjalComponent;
  let fixture: ComponentFixture<BrinjalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinjalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrinjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
