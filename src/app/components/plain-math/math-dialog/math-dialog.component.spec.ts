import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDialogComponent } from './math-dialog.component';

describe('MathDialogComponent', () => {
  let component: MathDialogComponent;
  let fixture: ComponentFixture<MathDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
