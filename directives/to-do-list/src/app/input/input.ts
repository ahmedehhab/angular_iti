import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  newTask: string = "";

@Output() addTask = new EventEmitter<string>(); 

onAdd(): void {
  const trimmed: string = this.newTask.trim();
  if (trimmed) {
    this.addTask.emit(trimmed);
    this.newTask = "";
  }
}
}
