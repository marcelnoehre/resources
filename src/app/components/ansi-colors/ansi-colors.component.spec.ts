import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnsiColorsComponent } from './ansi-colors.component';

describe('AnsiColorsComponent', () => {
  let component: AnsiColorsComponent;
  let fixture: ComponentFixture<AnsiColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnsiColorsComponent, RouterTestingModule],
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
