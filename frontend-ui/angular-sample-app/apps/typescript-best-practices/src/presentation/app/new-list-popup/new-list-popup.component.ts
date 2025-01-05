import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewListPopupService } from './new-list-popup.service';

@Component({
  selector: 'app-new-list-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-list-popup.component.html',
  styleUrl: './new-list-popup.component.scss',
})
export class NewListPopupComponent {
  protected listName = '';

  constructor(private newListPopupService: NewListPopupService) {}

  public createNewList(event: Event): void {
    event.preventDefault();
    this.newListPopupService.createList$.next(this.listName);
  }

  public cancel(): void {
    this.newListPopupService.closeList$.next();
  }
}
