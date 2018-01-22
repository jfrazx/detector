import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import {
  FooterComponent,
  HeaderComponent,
} from './components';
import { GroupPipe } from './pipes/group.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    GroupPipe,
  ],
  imports: [
    NgbModule,
  ],
  providers: [],
  exports: [
    FooterComponent,
    HeaderComponent,
    GroupPipe,
    NgbModule,
  ]
})
export class SharedModule {}
