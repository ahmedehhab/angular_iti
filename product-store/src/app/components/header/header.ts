import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class Header implements OnDestroy ,OnInit {
    cartItemCount = 0;
    private sub: Subscription | undefined;
    isLoggedIn!:boolean;
    constructor(private cartService: CartService ,private authService:AuthService,private router:Router) {
        this.sub = this.cartService.count$.subscribe(c => this.cartItemCount = c);
    }
   ngOnInit(): void {
       this.authService.getUserLogged$.subscribe(state=>{
           this.isLoggedIn=state;
       }) 
   }
    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
    onLogout(){
        this.authService.logout();
        this.router.navigate(['/login']);

    }
}
