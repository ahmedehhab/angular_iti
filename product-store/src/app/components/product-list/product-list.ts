import { Component, OnInit,ChangeDetectorRef ,signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Iproduct,ProductResponse } from '../../models/product.interface';
import { Product } from '../../services/product';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [ProductCard,CommonModule],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css'
})
export class ProductList implements
 OnInit {
  products = signal<Iproduct[]>([]);
totalProducts = signal<number>(0);
  pageSize :number;
  currentPage :number;
  constructor(private product:Product,
    private cdr: ChangeDetectorRef){
        
    this.pageSize=8;
    this.currentPage=1;
  }
    ngOnInit(): void {
        this.loadProducts();
    }
loadProducts() {
  const pageToLoad = this.currentPage < 1 ? 1 : this.currentPage;
  const skip = (pageToLoad - 1) * this.pageSize;

  this.product.getAllProducts(this.pageSize, skip).subscribe({
    next: (res: ProductResponse) => {
      this.products.set(res.products); 
      this.totalProducts.set(res.total); 
    }
  });
}

    changePage(newPage: number) {
        if (newPage < 1) return;
        if (newPage > Math.ceil(this.totalProducts() / this.pageSize)) return;
        this.currentPage = newPage;
        this.loadProducts();
    }

}
