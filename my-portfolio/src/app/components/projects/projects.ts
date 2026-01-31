import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  proj1 = {
    title: 'E-commerce Backend',
    desc: 'Modular architecture with Paymob integration and JWT security.',
    link: 'https://github.com/ahmedehhab/E-commerce'
  };

  proj2 = {
    title: 'Event X',
    desc: 'Scalable event management with Redis caching and optimized queries.',
    link: 'https://github.com/ahmedehhab/eventX'
  };

  proj3 = {
    title: 'Saraha Clone',
    desc: 'Secure anonymous messaging backend with Joi validation.',
    link: 'https://github.com/ahmedehhab/saraha'
  };
}