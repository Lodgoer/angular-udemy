import { Component, Input } from '@angular/core';
import { Tasks } from '../tasks';

interface TaskInerface {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-task',
  imports: [Task],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskInerface;
}
