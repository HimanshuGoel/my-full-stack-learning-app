import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  @Input() public name = '';
  @Input() public message = '';

  @Output() public closePopup = new EventEmitter<void>();

  public close() {
    this.closePopup.emit();
  }
}
