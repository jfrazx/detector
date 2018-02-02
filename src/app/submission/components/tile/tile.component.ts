import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stack-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})
export class StackTileComponent implements OnInit {
  @Input() text: String;
  toggle = true;

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.toggle = !this.toggle;
  }
}
