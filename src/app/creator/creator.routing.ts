import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './creator.component';

export const routes: Routes = [
  {
    path: 'new',
    component: CreatorComponent,
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
