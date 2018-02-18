import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-x-remove',
  templateUrl: './x-remove.component.html',
  styleUrls: ['x-remove.component.scss'],
})
export class XRemoveComponent {
  @Input() float = true;
}
