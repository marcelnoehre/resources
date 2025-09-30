import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AnsiColorsComponent } from './components/ansi-colors/ansi-colors.component';
import { CompareTextComponent } from './components/compare-text/compare-text.component';
import { LatexFormatterComponent } from './components/latex-formatter/latex-formatter.component';
import { PlainMathComponent } from './components/plain-math/plain-math.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'ansi-colors', component: AnsiColorsComponent },
    { path: 'compare-text', component: CompareTextComponent },
    { path: 'latex-formatter', component: LatexFormatterComponent },
    { path: 'plain-math', component: PlainMathComponent }
];
