import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule,CommonModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {
    loginForm:FormGroup;
    loginError: boolean ;
    constructor(private router: Router ,private authService:AuthService,private fb: FormBuilder) {
        this.loginError=false;
        this.loginForm = this.fb.group({email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]});
    }
   
    onSubmit(event: Event): void {
        event.preventDefault();
        if(this.loginForm.valid){
            const{email,password}=this.loginForm.value;
            if(this.authService.login(email,password)){
              this.router.navigate(['/products']);
              this.loginError=false;
            }else{
                this.loginError=true;
            }
        }else{
            this.loginForm.markAllAsTouched();
        }

          
    }
}
