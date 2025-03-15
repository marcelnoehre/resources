import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnsiColorsComponent } from './components/ansi-colors/ansi-colors.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'ansi-colors', component: AnsiColorsComponent },
    { path: '**', redirectTo: '' }
];
