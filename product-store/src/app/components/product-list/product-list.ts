import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.interface';
import { PRODUCTS } from '../../data/products.data';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [ProductCard],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css'
})
export class ProductList {
    products: Product[] = PRODUCTS;
}
