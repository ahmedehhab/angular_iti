import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Cart } from './components/cart/cart';
import { NotFound } from './components/not-found/not-found';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'products', component: ProductList,canActivate: [authGuard] },
    { path: 'product/:id', component: ProductDetails ,canActivate: [authGuard]},
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'cart', component: Cart ,canActivate: [authGuard]},
    { path: '**', component: NotFound }
];
