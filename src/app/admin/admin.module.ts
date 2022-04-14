import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BillingComponent } from './billing/billing.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { TicketsComponent } from './tickets/tickets.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SupportComponent,
    SettingsComponent,
    InventoryComponent,
    BillingComponent,
    AnalyticsComponent,
    TicketsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
