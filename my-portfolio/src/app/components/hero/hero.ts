import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name: string = "Ahmed Ehab Farouk";
  jobTitle: string = "Software Engineer";
  mailTo:string ='mailto:ahmedehab4778@gmail.com';

}
