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
  result: SafeHtml[] = ['', ''];

  constructor(private sanitizer: DomSanitizer) {}

  compareTexts() {
    this.compareLines();
  }

  private compareLines() {
    const [lines, prefix, baseStyle] = [[this.textLeft.split('\n'), this.textRight.split('\n')], 'background-color: #', '; display: flex; flex-direction: column; justify-content: center; min-height: 1.2rem; padding: 2px; margin: 0.25rem 0;'];
    let highlighted = ['', ''];

    for (let i = 0; i < Math.max(lines[0].length, lines[1].length); i++) {
      const sides = [lines[0][i] ?? '', lines[1][i] ?? ''];
      let style = sides.every(side => side === sides[0]) ? ['FED', 'DEF'] : ['FCA', 'ACF'];
      highlighted.forEach((highlight, index) => highlighted[index] = `${highlight}<div style="${prefix}${style[index]}${baseStyle}">${sides[index]}</div>`);
    }

    this.result = [this.sanitizer.bypassSecurityTrustHtml(highlighted[0]), this.sanitizer.bypassSecurityTrustHtml(highlighted[1])];
  }
}
