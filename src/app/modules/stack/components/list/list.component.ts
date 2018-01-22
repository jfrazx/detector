import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Stack } from '../../../../models';
import { StackService } from '../../services';

@Component({
  selector: 'app-stack-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class StackListComponent implements OnInit {
  stacks$: Observable<Stack[]>;
  selectedStack: Stack;

  constructor(
    private stackService: StackService,
  ) { }

  ngOnInit() {
    this.stacks$ = this.stackService.index();
  }

  private selectStack(stack: Stack): void {
    this.selectedStack = this.selectedStack === stack ? null : stack;
  }

}
