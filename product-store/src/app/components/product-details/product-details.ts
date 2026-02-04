import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe , DecimalPipe } from '@angular/common';
import { Product } from '../../models/product.interface';
import { PRODUCTS } from '../../data/products.data';
import { StarRating } from '../star-rating/star-rating';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [RouterLink, DecimalPipe, StarRating, DiscountPipe,CurrencyPipe],
    templateUrl: './product-details.html',
    styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
    product: Product | undefined;
    selectedImage: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private cartService: CartService
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.product = PRODUCTS.find(p => p.id === id);

        if (this.product) {
            this.selectedImage = this.product.images[0] || this.product.thumbnail;
        }
    }

    selectImage(image: string): void {
        this.selectedImage = image;
    }

    addToCart(): void {
        if (this.product) {
            this.cartService.addItem(this.product);
            alert(`${this.product.title} added to cart!`);
        }
    }

    goBack(): void {
        this.router.navigate(['/products']);
    }
}
