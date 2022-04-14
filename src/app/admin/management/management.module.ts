import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BarCounterComponent } from './bar-counter/bar-counter.component';
import { HotelServiceComponent } from './hotel-service/hotel-service.component';
import { CloudKitchenComponent } from './cloud-kitchen/cloud-kitchen.component';
import { ClientComponent } from './client/client.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    RestaurantComponent,
    BarCounterComponent,
    HotelServiceComponent,
    CloudKitchenComponent,
    ClientComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagementModule { }
