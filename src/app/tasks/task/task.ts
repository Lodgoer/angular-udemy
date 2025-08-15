import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Tasks } from '../tasks';
import { type TaskInerface } from './task.model';
@Component({
  selector: 'app-task',
  imports: [Task],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskInerface;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
