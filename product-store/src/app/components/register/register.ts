import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './register.html',
    styleUrl: './register.css'
})
export class Register {
    constructor(private router: Router) {}

    onSubmit(event: Event): void {
        event.preventDefault();
        this.router.navigate(['/products']);
    }
}
