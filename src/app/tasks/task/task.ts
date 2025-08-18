import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Tasks } from '../tasks';
import { type TaskInerface } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [Card, DatePipe],
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
