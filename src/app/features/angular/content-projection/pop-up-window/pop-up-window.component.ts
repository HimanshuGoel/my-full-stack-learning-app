import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popup-window',
  templateUrl: './pop-up-window.component.html'
})
export class PopUpWindowComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  @Input()
  isOpen = false;

  @Input()
  title = 'Title';

  @Output()
  closePopupEvent = new EventEmitter<string>();

  ngOnInit() {
    console.log('NG ON INIT');
  }

  closePopup() {
    this.isOpen = false;
    this.closePopupEvent.emit('Pop-up window closed');
  }
}
