import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {
    constructor(private router: Router) {}

    onSubmit(event: Event): void {
        event.preventDefault();
        this.router.navigate(['/products']);
    }
}
