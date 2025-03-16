import { Component, OnInit } from '@angular/core';
import { AnsiColors } from '../../interfaces/ansi-color.interface';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [MatTableModule, MatButtonModule, MatIconModule, ClipboardModule],
  templateUrl: './ansi-colors.component.html',
  styleUrl: './ansi-colors.component.scss'
})
export class AnsiColorsComponent implements OnInit {
  colors!: AnsiColors;
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAnsiColors().then(colors => {
      this.colors = colors;
    });
  }
}
