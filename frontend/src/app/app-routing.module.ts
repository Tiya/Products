import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'add', 
    canActivate:[AuthGuard],
    component:NewProductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'products',
    component:ProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
