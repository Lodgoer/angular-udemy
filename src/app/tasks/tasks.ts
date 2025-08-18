import { type NewTaskData } from './task/task.model';
import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';

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

  get selectedUserTasks() {
    return;
  }

  onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancleAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
