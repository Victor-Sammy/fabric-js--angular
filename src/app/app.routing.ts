import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'new',
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
