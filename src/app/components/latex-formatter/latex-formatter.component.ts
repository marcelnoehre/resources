import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CloseComponent } from '../close/close.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormatterMode } from '../../enums/formatter-mode.enum';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-latex-formatter',
  imports: [FormsModule, MatButtonToggleModule, MatFormFieldModule, MatInputModule, MatButtonModule, CloseComponent],
  templateUrl: './latex-formatter.component.html',
  styleUrl: './latex-formatter.component.scss'
})
export class LatexFormatterComponent {
  inputText = '';
  outputText = '';
  mode: FormatterMode.SPLIT | FormatterMode.JOIN = FormatterMode.SPLIT;
  chars: number = 80;

  constructor(private snackbar: SnackbarService) {}

  processText() {
    if (this.mode === FormatterMode.SPLIT) {
      this.outputText = this.wrapText(this.inputText, this.chars);
    } else if (this.mode === FormatterMode.JOIN) {
      this.outputText = this.joinText(this.inputText);
    } else {
      this.outputText = this.inputText;
    }
  }

  wrapText(text: string, max: number): string {
    const res: string[] = [];
    let tmp = '';

    text.split(/\s+/).forEach((word) => {
      if ((tmp + ' ' + word).trim().length > max) {
        res.push(tmp.trim());
        tmp = word;
      } else tmp += ' ' + word;
    });
    if (tmp.trim()) res.push(tmp.trim());
    return res.join('\n');
  }

  joinText(text: string): string {
    return text.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
  }

  copy() {
    navigator.clipboard.writeText(this.outputText).then(() => {
      this.snackbar.open('Copied to clipboard');
    }).catch((err) => {
      this.snackbar.open('Failed to copy');
    });
  }
}
