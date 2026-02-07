import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iproduct } from '../models/product.interface';
import { CartItem } from '../models/card-item';
@Injectable({ providedIn: 'root' })
export class CartService {
    private items: CartItem[] = [];
    private itemsSubject!:BehaviorSubject<CartItem[]> ;
    items$ !:Observable<CartItem[]> ;

    private countSubject!:BehaviorSubject<number> ; 
    count$ !:Observable<number>;  

    constructor() {
        const saved = localStorage.getItem('cart');
        if (saved) {
            try {
                this.items = JSON.parse(saved) || [];
            } catch {
                this.items = [];
            }
            }

            this.itemsSubject=new BehaviorSubject(this.items);
            this.items$=this.itemsSubject.asObservable();

            this.countSubject=new BehaviorSubject<number>(0);
            this.count$=this.countSubject.asObservable();

            this.itemsSubject.next(this.items);
            this.countSubject.next(this.getCount());
    }

    private save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.itemsSubject.next(this.items);
        this.countSubject.next(this.getCount());
    }

    addItem(product: Iproduct) {
        const existing :CartItem |undefined = this.items.find(i => i.id === product.id);
        if (existing) {
            if(existing.quantity+1 >existing.stock){
                alert(`Cannot add more than ${existing.stock} items to the cart.`);
                return;
            }
            existing.quantity++;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.save();
        alert(`${product.title} added to cart!`);
    }

    removeItem(productId: number) {
        this.items = this.items.filter(i => i.id !== productId);
        this.save();
    }

    clear() {
        this.items = [];
        this.save();
    }

    getItems() {
        return  [...this.items];
    }

    getCount() {
        return this.items.reduce((sum, i) => sum + (i.quantity || 1), 0);
    }
    
}
