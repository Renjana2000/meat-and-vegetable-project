import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauliflowerComponent } from './cauliflower.component';

describe('CauliflowerComponent', () => {
  let component: CauliflowerComponent;
  let fixture: ComponentFixture<CauliflowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CauliflowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauliflowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
