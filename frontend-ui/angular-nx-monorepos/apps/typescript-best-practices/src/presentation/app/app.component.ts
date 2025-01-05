import { Component, OnInit, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { NewListPopupComponent } from './new-list-popup/new-list-popup.component';
import { ListComponent } from './list/list.component';
import {
  CreateTodoListUseCase,
  SaveTodoListsUseCase,
  DeleteTodoListUseCase,
  GetTodoListsUseCase,
} from '../../domain/use-cases';
import { TodoListRepository } from '../../domain/repositories/todo-list';
import { GetDataStore } from '../../domain/utilities/get-data-store';
import { TodoList } from '../../domain/entities';
import { Themes } from './themes.enum';
import { instrument } from '../../domain/utilities/instrument.decorator';
import { StorageError } from '../../domain/utilities/storage-error';
import { ErrorComponent } from './error/error.component';
import { NewListPopupService } from './new-list-popup/new-list-popup.service';

const createTodoListUseCaseFactory = () => new CreateTodoListUseCase();
const deleteTodoListUseCaseFactory = () => new DeleteTodoListUseCase();
const saveTodoListsFactory = (listRepository: TodoListRepository) =>
  new SaveTodoListsUseCase(listRepository);
const getTodoListsFactory = (listRepository: TodoListRepository) =>
  new GetTodoListsUseCase(listRepository);

@instrument
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent, ErrorComponent],
  providers: [
    {
      provide: CreateTodoListUseCase,
      useFactory: createTodoListUseCaseFactory,
    },
    {
      provide: DeleteTodoListUseCase,
      useFactory: deleteTodoListUseCaseFactory,
    },
    {
      provide: SaveTodoListsUseCase,
      useFactory: saveTodoListsFactory,
      deps: [TodoListRepository],
    },
    {
      provide: GetTodoListsUseCase,
      useFactory: getTodoListsFactory,
      deps: [TodoListRepository],
    },
    { provide: TodoListRepository, useFactory: GetDataStore },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public showNewListForm = false;
  public lists: TodoList[] = [];
  public showError = false;
  public errorName = '';
  public errorMessage = '';

  constructor(
    private createTodoListUseCase: CreateTodoListUseCase,
    private saveTodoListsUseCase: SaveTodoListsUseCase,
    private getTodoListsUseCase: GetTodoListsUseCase,
    private deleteTodoListUseCase: DeleteTodoListUseCase,
    private router: Router,
    private newListPopupService: NewListPopupService,
    private destroyRef: DestroyRef
  ) {}

  public ngOnInit(): void {
    this.getAllTodoLists();

    this.newListPopupService.createList$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: listName => {
          if (listName) {
            this.createNewList(listName);
          }
        },
      });

    this.newListPopupService.closeList$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => this.closeAddForm(),
      });
  }

  public closeErrorPopup(): void {
    this.showError = false;
  }

  public showAddForm(): void {
    this.router.navigateByUrl('/new-list');
  }

  public closeAddForm(): void {
    this.router.navigate(['/']);
  }

  public createNewList(listName: string): void {
    this.createTodoListUseCase.execute(listName, []).subscribe({
      next: list => {
        this.lists.push(list);
        this.closeAddForm();
      },
    });
  }

  public getAllTodoLists(): void {
    this.getTodoListsUseCase.execute().subscribe({
      next: (lists: TodoList[]) => {
        if (lists) {
          this.lists = lists;
        }
      },
    });
  }

  public saveLists(): void {
    this.saveTodoListsUseCase.execute(this.lists).subscribe({
      error: (err: StorageError) => {
        this.errorName = err.name;
        this.errorMessage = err.message;
        this.showError = true;
      }
    });
  }

  public deleteTodoList(listTitle: string): void {
    this.deleteTodoListUseCase.execute(listTitle, this.lists).subscribe({
      next: lists => {
        this.lists = lists;
        this.saveLists();
      },
    });
  }

  public switchTheme(theme: Themes): void {
    const unhandled = (_: never): never => _;
    switch (theme) {
      case Themes.regular:
        // handle regular theme
        break;
      case Themes.dark:
        // handle dark theme
        break;
      case Themes.highContrast:
        // handle high contrast
        break;
      default:
        return unhandled(theme);
    }
  }
}
