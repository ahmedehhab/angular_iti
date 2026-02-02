import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.interface';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CurrencyPipe, DecimalPipe, DiscountPipe],
    templateUrl: './product-card.html',
    styleUrl: './product-card.css'
})
export class ProductCard {
    @Input({ required: true }) product!: Product;

    constructor(private router: Router, private cartService: CartService) { }

    goToDetails(): void {
        this.router.navigate(['/product', this.product.id]);
    }

    addToCart(event: Event): void {
        event.stopPropagation();
        this.cartService.addItem(this.product);
        alert(`${this.product.title} added to cart!`);
    }
}
