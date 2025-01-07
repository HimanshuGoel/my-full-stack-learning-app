import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Todo } from '../../../domain/entities';

@Component({
  selector: 'app-new-todo-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-todo-popup.component.html',
  styleUrl: './new-todo-popup.component.scss',
})
export class NewTodoPopupComponent {
  @Output() newTodo = new EventEmitter<Partial<Todo>>();
  @Output() closeModal = new EventEmitter<void>();

  protected title = '';
  protected completed = false;

  public createNewTodo(event: Event): void {
    event.preventDefault();
    this.newTodo.emit({
      title: this.title,
      completed: this.completed,
    });
  }

  public cancel(): void {
    this.closeModal.emit();
  }
}
