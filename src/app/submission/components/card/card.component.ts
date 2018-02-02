import { Component, Input } from '@angular/core';

import { Stack } from '../../models';

@Component({
  selector: 'app-stack-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class StackCardComponent {
  @Input() stack: Stack;

  @Input() selected = false;

  private prevent(event: Event): void {
    event.stopPropagation();
  }
}
