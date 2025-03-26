import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-close',
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './close.component.html',
  styleUrl: './close.component.scss'
})
export class CloseComponent {

}
