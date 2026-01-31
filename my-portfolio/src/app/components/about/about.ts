import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  aboutDescription:string="I specialize in backend and building high-performance systems. Currently advancing through ITI's Open-Source program";
  education:string="Communications & Electronics Engineering, Mansoura collage Academy"
 scholarshipName:string="ITI Scholar 2025";
 scholarshipDescription:string="9-month intensive training in Full-Stack development";
}
