import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {CheckOutComponent} from './components/check-out/check-out.component';
import {OrderSuccessComponent} from './components/order-success/order-success.component';
import {LoginComponent} from './components/login/login.component';
import {AdminProductsComponent} from './components/admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './components/admin/admin-orders/admin-orders.component';
import {MyOrdersComponent} from './components/my-orders/my-orders.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
