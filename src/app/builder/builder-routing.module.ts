import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BuildComponent } from './build/build.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {path : '' , component : BuildComponent },
  {path : 'config' , component : ConfigComponent },
  {path : 'analytics' , component : AnalyticsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
