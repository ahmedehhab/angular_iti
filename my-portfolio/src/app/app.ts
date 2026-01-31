import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{About} from './components/about/about';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
@Component({
  selector: 'app-root',
  imports: [About,Footer,Hero,Skills,Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
