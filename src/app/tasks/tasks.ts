import { type NewTaskData } from './task/task.model';
import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {}
  get selectedUserTasks() {
    return this.taskService.grtUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.taskService.removeTask(id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
