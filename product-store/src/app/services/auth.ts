import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private  isLoginSubject!:BehaviorSubject<boolean>;
  public getUserLogged$!:Observable<boolean>;
  public users!:User[];
  constructor(){
     this.loadUsers();
    this.isLoginSubject=   new BehaviorSubject(this.isLogin());

  this.getUserLogged$=this.isLoginSubject.asObservable();
  }

  private loadUsers(): void {
    const storedUsers = localStorage.getItem('app_users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    } else {
      this.users = [];
    }
  }


  login(email:string,password:string):boolean{
     const existing:User|undefined= this.users.find(usr=>email==usr.email &&password==usr.password);
     if(existing){
      localStorage.setItem('token','ahmed_ehab_farouk');
      this.isLoginSubject.next(true);
     return true;
     }
      return false
  }
  signup(name:string,email:string,password:string,confirmPassword:string):boolean{
     const existing:User|undefined=this.users.find(usr=>email==usr.email);
     if(!existing){
        const newUser:User={name,email,password};
        this.addUser(newUser);
        return true;
     }
    return false;
  }

  logout():void{
   localStorage.removeItem('token');
   this.isLoginSubject.next(false);
  }
  
  isLogin():boolean{
    return localStorage.getItem('token')?true:false;
  }
  addUser(user:User):void{
    this.users.push(user);
     localStorage.setItem('app_users', JSON.stringify(this.users));
  }

}
