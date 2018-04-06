import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-ignoreables',
  templateUrl: './ignoreables.component.html',
  styleUrls: ['ignoreables.component.scss'],
})
export class StackIgnoreablesComponent {
  @Input() ignoreables: string[] = [];
}
