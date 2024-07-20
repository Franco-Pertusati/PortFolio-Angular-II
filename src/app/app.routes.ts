import { Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DialogComponent } from './shared/projects/components/dialog/dialog.component';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent
    },
    {
        path: 'wasd',
        component: DialogComponent
    }
];
