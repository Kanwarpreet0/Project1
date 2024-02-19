import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CupcakeQuantityComponent } from './cupcake-quantity/cupcake-quantity.component';
import { CupcakeFlavorsComponent } from './cupcake-flavors/cupcake-flavors.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

const routes: Routes = [
  { path: 'cupcake-quantity', component: CupcakeQuantityComponent },
  { path: 'cupcake-flavors/:quantity', component: CupcakeFlavorsComponent },
  { path: 'order-summary/:quantity/:flavor', component: OrderSummaryComponent },
  { path: '', redirectTo: '/cupcake-quantity', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
