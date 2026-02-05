import { Component, OnInit ,signal} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CurrencyPipe , DecimalPipe } from '@angular/common';
import { Iproduct } from '../../models/product.interface';
import { StarRating } from '../star-rating/star-rating';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CartService } from '../../services/cart.service';
import { Product } from '../../services/product';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [RouterLink, DecimalPipe, StarRating, DiscountPipe,CurrencyPipe],
    templateUrl: './product-details.html',
    styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
   product = signal<Iproduct | undefined>(undefined);
    selectedImage: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private cartService: CartService,
        private productServe:Product
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.productServe.getProductById(id).subscribe(p => {
        this.product.set(p);
        this.selectedImage = p.images?.[0] || p.thumbnail; 
    });
    
    }

  selectImage(image: string): void {
    this.selectedImage = image;
}

addToCart(): void {
    const p = this.product(); 
    if (p) {
        this.cartService.addItem(p);
        alert(`${p.title} added to cart!`);
    }
}

    goBack(): void {
        this.router.navigate(['/products']);
    }
}
