import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors ,} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user';
@Component({
    selector: 'app-register',
    standalone: true,
    imports: [RouterLink,CommonModule,ReactiveFormsModule],
    templateUrl: './register.html',
    styleUrl: './register.css'
})
export class Register {
    registerForm:FormGroup;
  accountIsReadyRegister:boolean;
    constructor(private router: Router,private authSerivce:AuthService,private fb:FormBuilder) {
      this.accountIsReadyRegister=false;
        this.registerForm=this.fb.group({
           name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]],
            terms: [false, [Validators.requiredTrue]]
        },{ validators: this.passwordMatchFunction });
      
    }
    passwordMatchFunction(control: AbstractControl): ValidationErrors | null {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;
        return password === confirmPassword ? null : { passwordMismatch: true };
    }

    onSubmit(event: Event): void {
        event.preventDefault();
        if(this.registerForm.valid){
            const{name,email,password,confirmPassword}=this.registerForm.value;
            if(!this.authSerivce.signup(name,email,password,confirmPassword)){
                this.accountIsReadyRegister=true;
            }else{
                this.router.navigate(['/login']);
            }
                
        }else{
             this.registerForm.markAllAsTouched();
        }
        
    }
}
