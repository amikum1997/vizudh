import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuildComponent } from './build/build.component';
import { ConfigComponent } from './config/config.component';
import { AnalyticsComponent } from './analytics/analytics.component';


@NgModule({
  declarations: [
    BuildComponent,
    ConfigComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule
  ]
})
export class BuilderModule { }
