import { Component, EventEmitter, Input, inject } from '@angular/core';
import { type TaskInerface } from './task.model';
import { TaskService } from '../tasks.service';
@Component({
  standalone: false,
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskInerface;
  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
