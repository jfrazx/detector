import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['tile.component.scss'],
})
export class TileComponent {
  @Input() text: String;

  @Input() size = 20;

  @Input() selected = false;
}
