import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  lang1:string = 'JavaScript';
  lang2:string = 'TypeScript';
  lang3:string = 'C++';
  lang4:string = 'Python';
  lang5:string ='java';
  frame1:string = 'Express.js';
  frame2:string = 'Angular';
  tool1:string = 'Docker';
  tool2:string = 'Git & GitHub';
  tool3:string = 'MongoDB';
  tool4:string = 'Redis';
  tool5:string="mysql";
}