import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  @Input() text: string = "";
  @Output() evClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  emitEvent(ev: any) {
    this.evClick.emit(ev);
  }
}
