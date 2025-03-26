import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComparisonMode } from '../../enums/comparison-mode.enum';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  result: any[][] = [];

  compareTexts() {
    this.result = [];
    switch (this.comparisonMode) {
      case ComparisonMode.LINES:
        this.compareLines();
        break;
      case ComparisonMode.LINES_AND_WORDS:
        this.compareLinesAndWords();
        break;
      case ComparisonMode.WORDS:
        this.compareWords();
        break;
      default:
        break;
    }
  }

  private compareLines() {
    for (let i = 0; i < Math.max(this.textLeft.split('\n').length, this.textRight.split('\n').length); i++) {
      const sides = [this.textLeft.split('\n')[i] ?? '', this.textRight.split('\n')[i] ?? ''];
      const match: boolean = sides[0] === sides[1];
      this.result.push([{ value: sides[0], bg: match ? '#FED' : '#FCA' }, { value: sides[1], bg: match ? '#DEF' : '#ACF' }]);
    }
  }
  

  private compareLinesAndWords() {

  }

  private compareWords() {

  }
}