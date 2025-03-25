import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { DashboardItem } from '../../interfaces/dashboard-item.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  dashboardItems: DashboardItem[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dashboardItems = this.dataService.getDashboardItems(); 
  }
}
