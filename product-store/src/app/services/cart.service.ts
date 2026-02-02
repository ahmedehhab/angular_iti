import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
    private items: any[] = [];
    private itemsSubject = new BehaviorSubject<any[]>([]);
    items$ = this.itemsSubject.asObservable();

    private countSubject = new BehaviorSubject<number>(0);
    count$ = this.countSubject.asObservable();

    constructor() {
        const saved = localStorage.getItem('cart');
        if (saved) {
            try {
                this.items = JSON.parse(saved) || [];
            } catch {
                this.items = [];
            }
            this.itemsSubject.next(this.items);
            this.countSubject.next(this.getCount());
        }
    }

    private save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.itemsSubject.next(this.items);
        this.countSubject.next(this.getCount());
    }

    addItem(product: any) {
        const existing = this.items.find(i => i.id === product.id);
        if (existing) {
            existing.quantity = (existing.quantity || 1) + 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.save();
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
        // return a copy to avoid accidental mutation
        return JSON.parse(JSON.stringify(this.items));
    }

    getCount() {
        return this.items.reduce((sum, i) => sum + (i.quantity || 1), 0);
    }
}
