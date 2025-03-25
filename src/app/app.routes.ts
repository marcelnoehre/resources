import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnsiColorsComponent } from './components/ansi-colors/ansi-colors.component';
import { CompareTextComponent } from './components/compare-text/compare-text.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'ansi-colors', component: AnsiColorsComponent },
    { path: 'compare-text', component: CompareTextComponent }
];
