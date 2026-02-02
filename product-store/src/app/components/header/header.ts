import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header implements OnDestroy {
    cartItemCount = 0;
    private sub: Subscription | undefined;

    constructor(private cartService: CartService) {
        this.sub = this.cartService.count$.subscribe(c => this.cartItemCount = c);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
