import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  todo: { tasks: string, completed: boolean }[] = []
  tasks: string = ''
  editIndex: number | null = null
  editTaskText: string = ''

  get completedTasks() {
    return this.todo.filter(task => task.completed)
  }

  addTask() {
    if (this.tasks.trim()) {
      this.todo.push({ tasks: this.tasks, completed: false })
      this.tasks = ''
    }
    console.log(this.tasks)
  }

  deleteTask(i: number) {
    this.todo.splice(i, 1)
  }

  editTask(i: number) {
    this.editIndex = i
    this.editTaskText = this.todo[i].tasks
  }

  saveTask(i: number) {
    if (this.editTaskText.trim()) {
      this.todo[i].tasks = this.editTaskText
      this.editIndex = null
      this.editTaskText = ''
    }
  }

  cancelEdit() {
    this.editIndex = null
    this.editTaskText = ''
  }

  toggleCompleteTask(i: number) {
    this.todo[i].completed = !this.todo[i].completed
  }
}