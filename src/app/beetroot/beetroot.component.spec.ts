import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeetrootComponent } from './beetroot.component';

describe('BeetrootComponent', () => {
  let component: BeetrootComponent;
  let fixture: ComponentFixture<BeetrootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeetrootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeetrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
