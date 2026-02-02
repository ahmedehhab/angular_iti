import { Component, EventEmitter, Input,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interface/todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() tasks: Todo[] = []; 
  
  @Output() deleteTask = new EventEmitter<number>();

  toggle(task: Todo): void {
    task.finished = !task.finished;
  }

  deleteAt(index: number): void {
    this.deleteTask.emit(index);
  }
}
