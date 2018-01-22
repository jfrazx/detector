import { Component, OnInit, Input } from '@angular/core';

import { Stack } from '../../../../models';

@Component({
  selector: 'app-stack-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class StackCardComponent implements OnInit {
  @Input()
  stack: Stack;

  @Input()
  selected = false;

  constructor() { }

  ngOnInit() {
  }

  private prevent(event: Event): void {
    event.stopPropagation();
  }

}
