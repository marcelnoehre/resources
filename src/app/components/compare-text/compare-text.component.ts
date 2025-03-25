import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComparisonMode } from '../../enums/comparison-mode.enum';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-compare-text',
  imports: [FormsModule, MatButtonToggleModule, MatButtonModule],
  templateUrl: './compare-text.component.html',
  styleUrl: './compare-text.component.scss'
})
export class CompareTextComponent {
  comparisonMode: ComparisonMode = ComparisonMode.WORDS;
  textLeft = '';
  textRight = '';

  compareTexts() {
    
  }
}
