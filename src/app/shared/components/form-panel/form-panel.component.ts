import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.scss'],
})
export class FormPanelComponent {
  @Input() text: string;
  @Input() pull = false;
  @Input() font = 20;
  @Input() color = 'info';
}
