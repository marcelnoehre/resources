import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsiColorsComponent } from './ansi-colors.component';

describe('AnsiColorsComponent', () => {
  let component: AnsiColorsComponent;
  let fixture: ComponentFixture<AnsiColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnsiColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsiColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
