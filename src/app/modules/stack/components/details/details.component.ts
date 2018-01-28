import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Stack } from '../../../../models';
import { StackService } from '../../services';

@Component({
  selector: 'app-stack-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class StackDetailsComponent {
  @Input() stack: Stack;

  constructor(private stackService: StackService) {}

  delete(): void {}
}
