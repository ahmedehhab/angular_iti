import { Component, signal } from '@angular/core';
import { Input } from './input/input';
import { List } from "./list/list";
import { Todo } from './interface/todo';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [Input, List],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('to-do-list');
  
  tasks: Todo[] = [];

  addTask(task: string): void {
    this.tasks = [...this.tasks, { text: task, finished: false }];
  }

  deleteTask(index: number): void {
    this.tasks = this.tasks.filter((_, i) => i !== index);
  }
}