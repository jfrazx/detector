import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Stack } from '../../models';

@Component({
  selector: 'app-stack-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class StackCardComponent {
  @Input() stack: Stack;

  @Input() selected = false;

  @Output() remove: EventEmitter<Stack> = new EventEmitter<Stack>();

  private prevent(event: Event): void {
    event.stopPropagation();
  }

  onDelete(event: Stack): void {
    this.remove.emit(event);
  }
}
