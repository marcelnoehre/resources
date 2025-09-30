import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CloseComponent } from '../close/close.component';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MathDialogComponent } from './math-dialog/math-dialog.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-plain-math',
  imports: [FormsModule, MatButtonModule, CloseComponent],
  templateUrl: './plain-math.component.html',
  styleUrl: './plain-math.component.scss'
})
export class PlainMathComponent implements OnInit {
  inputText = '';
  outputText = '';
  replaceMap: { [key: string]: string } = {};
  inlinePattern = /\\\((.*?)\\\)/gs
  displayPattern = /\\\[(.*?)\\\]/gs

  constructor(
    private dialog: MatDialog, 
    private snackbar: SnackbarService,

  ) {}

  ngOnInit(): void {
    const stored = localStorage.getItem('replaceMap');
    this.replaceMap = stored ? JSON.parse(stored) : {};
  }

  async processText() {
    let text = this.inputText.replace(/\r\n/g, '\n');
    

    const inlineMatches = Array.from(text.matchAll(this.inlinePattern), m => m[1]);
    const displayMatches = Array.from(text.matchAll(this.displayPattern), m => m[1]);

    for (const match of inlineMatches) {
      if (this.replaceMap[match]) {
        const regex = new RegExp(`\\\\\\(${match.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\\\\\)`, 'g');
        text = text.replace(regex, this.replaceMap[match]);
      } else {
        const res = await this.check(match);
        if (res === '') continue;
        const regex = new RegExp(`\\\\\\(${match.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\\\\\)`, 'g');
        text = text.replace(regex, res);
      }
    }

    for (const match of displayMatches) {
      if (this.replaceMap[match]) {
        const regex = new RegExp(`\\\\\\[${match.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\\\\\]`, 'g');
        text = text.replace(regex, this.replaceMap[match]);
      } else {
        const res = await this.check(match);
        if (res === '') continue;
        const regex = new RegExp(`\\\\\\[${match.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\\\\\]`, 'g');
        text = text.replace(regex, res);
      }
    }

    text = text.replace(/\\emph\{([^}]+)\}/g, "$1"); // \emph{...} -> ...
    text = text.replace(/\\textbf\{([^}]+)\}/g, "$1"); // \textbf{...} -> ...
    text = text.replace(/\\textit\{([^}]+)\}/g, "$1"); // \textit{...} -> ...
    text = text.replace(/\\underline\{([^}]+)\}/g, "$1"); // \underline{...} -> ...
    text = text.replace(/\\textsuperscript\{([^}]+)\}/g, "$1"); // \textsuperscript{...} -> ...
    text = text.replace(/~?\\cite\{[^}]+\}/g, ""); // ~\cite{...} or \cite{...} -> ""
    text = text.replace(/~?\\cite[p|t]?\[?[^\]]*\]?\{[^}]+\}/g, "");
    text = text.replace(/~?\\footnote\{[^}]+\}/g, ""); // ~\footnote{...} or \footnote{...} -> ""
    text = text.replace(/~\\ref\{[^}]+\}/g, "~1.2"); // ~\ref{...} -> ~1.2
    text = text.replace(/~/g, " "); // ~ -> space
    text = text.replace(/\\begin\{.*?\}[\s\S]*?\\end\{.*?\}/g, ""); // remove figures, tables, etc.
    text = text.replace(/\\([^\s])/g, "$1"); // \. -> .
    text = text.replace(/``(.*?)''/g, '"$1"'); // ``...'' -> "..."
    
    const paragraphs = text.split(/\n{2,}/);
    localStorage.setItem('replaceMap', JSON.stringify(this.replaceMap));
    this.outputText = paragraphs.map(paragraph => this.joinText(paragraph)).join('\n\n');
  }

  joinText(text: string): string {
    return text.replace(/\s*\n\s*/g, ' ').replace(/\s+/g, ' ').trim();
  }

  async check(value: string): Promise<string> {
    if(/^[0-9]+$/.test(value.trim())) {
      return value.trim();
    }
    if(/^[a-zA-Z]+$/.test(value.trim())) {
      return value.trim();
    }

    try {
      const result = await this.dialog.open(MathDialogComponent, {
        width: '400px',
        data: {
          title: 'Replacement',
          description: value,
        }
      }).afterClosed().toPromise();

      if (result) {
        this.replaceMap[value] = result;
        return result;
      } else {
        return '';
      }
    } catch (err) {
      return '';
    }
  }

  copy() {
    navigator.clipboard.writeText(this.outputText).then(() => {
      this.snackbar.open('Copied to clipboard');
    }).catch((err) => {
      this.snackbar.open('Failed to copy');
    });
  }
}
