import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareTextComponent } from './compare-text.component';

describe('CompareTextComponent', () => {
  let component: CompareTextComponent;
  let fixture: ComponentFixture<CompareTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
