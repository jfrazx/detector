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
  imports: [],
  providers: [],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule {}
