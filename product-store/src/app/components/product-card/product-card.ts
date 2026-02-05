import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Iproduct} from '../../models/product.interface';
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
    @Input({ required: true }) product!: Iproduct;

    constructor(private router: Router, private cartService: CartService) { }

    goToDetails(): void {
        this.router.navigate(['/product', this.product.id]);
    }
    addToCart(event: Event): void {
        event.stopPropagation();
        const currentQuantity = this.cartService.getQuantity(this.product.id);
        if (currentQuantity + 1 > this.product.stock) {
         alert(`Cannot add more than ${this.product.stock} items to the cart.`);
         return;
    }
        this.cartService.addItem(this.product);
        alert(`${this.product.title} added to cart!`);
    }
}


