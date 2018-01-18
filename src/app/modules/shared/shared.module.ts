import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import {
  FooterComponent,
  HeaderComponent,
} from './components';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
  ],
  providers: [],
  exports: [
    FooterComponent,
    HeaderComponent,
    NgbModule,
  ]
})
export class SharedModule {}
