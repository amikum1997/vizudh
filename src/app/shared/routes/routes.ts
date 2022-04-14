import { Routes } from '@angular/router';


export const content: Routes = [
  {
    path: '',
    loadChildren: () => import('../../admin/admin.module').then(m => m.AdminModule)
  },
];
