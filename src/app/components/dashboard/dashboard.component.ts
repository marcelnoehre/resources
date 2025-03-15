import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DashboardItem } from '../../interfaces/dashboard-item.interface';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dashboardItems: DashboardItem[] = [
    { title: 'ANSI Colors', url: '/ansi-colors' }
  ];
}
