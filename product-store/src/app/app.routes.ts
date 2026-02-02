import { Routes } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Cart } from './components/cart/cart';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'products', component: ProductList },
    { path: 'product/:id', component: ProductDetails },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'cart', component: Cart },
    { path: '**', component: NotFound }
];
