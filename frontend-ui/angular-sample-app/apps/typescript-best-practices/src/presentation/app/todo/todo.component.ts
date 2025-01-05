import { Component, Input, Output, EventEmitter, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Todo } from '../../../domain/entities';
import { UpdateCompletedStatusUseCase } from '../../../domain/use-cases';

const updateCompleteUseCaseFactory = new UpdateCompletedStatusUseCase();

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: UpdateCompletedStatusUseCase,
      useValue: updateCompleteUseCaseFactory,
    },
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  @Input() todo: Todo | undefined = undefined;

  @Output() delete = new EventEmitter<Todo>();
  @Output() saveTodo = new EventEmitter<void>();

  constructor(
    private updateCompletedStatusUseCase: UpdateCompletedStatusUseCase,
    private destroyRef: DestroyRef
  ) {}

  public completeStatusChanged(): void {
    this.updateCompletedStatusUseCase
      .execute(this.todo!, this.todo!.completed)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.saveTodo.emit(),
      });
  }

  public deleteTodo(): void {
    this.delete.emit(this.todo);
  }
}
