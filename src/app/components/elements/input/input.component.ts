import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent implements OnInit {
  @Output() evValue: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  emitInputValue(ev: any) {
    this.evValue.emit(ev.target.value);
  }
}
