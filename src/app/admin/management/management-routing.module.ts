import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicesComponent} from './services/services.component'
import {BarCounterComponent} from './bar-counter/bar-counter.component'
import {ClientComponent} from './client/client.component';
import {CloudKitchenComponent} from './cloud-kitchen/cloud-kitchen.component';
import {HotelServiceComponent} from './hotel-service/hotel-service.component';
import {RestaurantComponent} from './restaurant/restaurant.component';

const routes: Routes = [
    {path : '' , component : ServicesComponent },
    {path : 'barCounter' , component : BarCounterComponent },
    {path : 'cloudKitchen' , component : CloudKitchenComponent },
    {path : 'HotelManagement' , component : HotelServiceComponent },
    {path : 'RestaurantManagement' , component : RestaurantComponent },
    {path : 'ClientManagement' , component : ClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
