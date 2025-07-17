import { Component, OnInit } from '@angular/core';
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
export class LatexFormatterComponent implements OnInit{
  inputText = '';
  outputText = '';
  mode: FormatterMode.SPLIT | FormatterMode.JOIN = FormatterMode.SPLIT;
  charKey = 'latex-formatter-chars';
  chars: number = 100;

  constructor(private snackbar: SnackbarService) {}

  ngOnInit(): void {
    if (window.localStorage.getItem(this.charKey)) {
      this.chars = Number(window.localStorage.getItem(this.charKey) || '120');
    }
  }

  onCharsChange(value: number): void {
    window.localStorage.setItem(this.charKey, value.toString());
  }

  processText() {
    const paragraphs = this.inputText.split(/\n{2,}/); // Split into paragraphs by 2+ newlines

    if (this.mode === FormatterMode.SPLIT) {
      this.outputText = paragraphs
        .map(paragraph => this.wrapText(paragraph, this.chars))
        .join('\n\n');
    } else if (this.mode === FormatterMode.JOIN) {
      this.outputText = paragraphs
        .map(paragraph => this.joinText(paragraph))
        .join('\n\n');
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
