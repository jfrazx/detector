import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stack-ignoreables',
  templateUrl: './ignoreables.component.html',
  styleUrls: ['./ignoreables.component.css']
})
export class StackIgnoreablesComponent {
  @Input()
  ignoreables: string[] = [];
}
