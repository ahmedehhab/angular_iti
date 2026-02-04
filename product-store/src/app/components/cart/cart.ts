import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { CurrencyPipe } from '@angular/common';
import { CartItem } from '../../models/card-item';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [RouterLink, CurrencyPipe],
    templateUrl: './cart.html',
    styleUrl: './cart.css'
})
export class Cart implements OnInit, OnDestroy {
    cartItems: CartItem[] = [];
    private sub: Subscription | undefined;

    constructor(private cartService: CartService) { }

    ngOnInit(): void {
        this.cartItems = this.cartService.getItems();
        this.sub = this.cartService.items$.subscribe(items => this.cartItems = items);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    removeItem(id: number): void {
        this.cartService.removeItem(id);
    }

    clearCart(): void {
        if (confirm('Are you sure you want to delete all items from the cart?')) {
            this.cartService.clear();
        }
    }

    get totalAmount(): number {
        return this.cartItems.reduce((sum, i) => sum + ((i.price || 0) * (i.quantity || 1)), 0);
    }
}
