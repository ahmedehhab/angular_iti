import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Cart } from './components/cart/cart';
import { NotFound } from './components/not-found/not-found';
import { authGuard  } from './guards/auth-guard';
import { gestGuard } from './guards/gest-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', loadComponent:()=>import('./components/product-list/product-list').then(obj=>obj.ProductList),canActivate: [authGuard] },
    { path: 'product/:id', loadComponent:()=>import('./components/product-details/product-details').then(obj=>obj.ProductDetails) ,canActivate: [authGuard]},
    { path: 'login', component: Login ,canActivate:[gestGuard] },
    { path: 'register', component: Register ,canActivate:[gestGuard]},
    { path: 'cart', loadComponent:()=>import('./components/cart/cart').then(obj=>obj.Cart) ,canActivate: [authGuard]},
    { path: '**', component: NotFound }
];
