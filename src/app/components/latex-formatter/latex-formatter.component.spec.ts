import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatexFormatterComponent } from './latex-formatter.component';

describe('LatexFormatterComponent', () => {
  let component: LatexFormatterComponent;
  let fixture: ComponentFixture<LatexFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatexFormatterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatexFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
