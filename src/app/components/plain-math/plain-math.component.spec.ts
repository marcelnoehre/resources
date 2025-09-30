import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainMathComponent } from './plain-math.component';

describe('PlainMathComponent', () => {
  let component: PlainMathComponent;
  let fixture: ComponentFixture<PlainMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlainMathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
