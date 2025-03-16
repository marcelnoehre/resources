import { Component, OnInit } from '@angular/core';
import { AnsiColors } from '../../interfaces/ansi-color.interface';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  imports: [MatTableModule, MatButtonModule, MatIconModule, ClipboardModule, RouterModule],
  templateUrl: './ansi-colors.component.html',
  styleUrl: './ansi-colors.component.scss'
})
export class AnsiColorsComponent implements OnInit {
  colors: AnsiColors = {
    basic: [],
    special: []
  };
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.colors = this.dataService.getAnsiColors();
  }
}
