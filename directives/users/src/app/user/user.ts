import { Component } from '@angular/core';
import data from '../../data/users.json'
import { Iuser } from '../../interfaces/iuser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  users:Iuser[];
  searchEmail:string;
  constructor(){
    this.users=data;
    this.searchEmail="";
  }

}
