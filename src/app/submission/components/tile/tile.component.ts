import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stack-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['tile.component.scss'],
})
export class StackTileComponent {
  @Input() text: String;
  toggle = true;

  onClick(): void {
    this.toggle = !this.toggle;
  }
}
