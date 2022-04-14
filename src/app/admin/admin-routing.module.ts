import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { InventoryComponent } from './inventory/inventory.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path : '' , component : DashboardComponent},
  {path : 'inventory' , component : InventoryComponent},
  {path : 'analytics' , component : AnalyticsComponent},
  {path : 'tickets_feedback' , component : TicketsComponent},
  {
    path: 'management',
    loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
  },
  {path : 'settings' , component : SettingsComponent},
  {path : 'support' , component : SupportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
