import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { FooterComponent, HeaderComponent } from './components';

import { EachSlicePipe } from './pipes';
import { ClickLinkDirective } from './directives/click-link.directive';
import { PregexPipe } from './pipes/pregex.pipe';

@NgModule({
  declarations: [
    EachSlicePipe,
    FooterComponent,
    HeaderComponent,
    ClickLinkDirective,
    PregexPipe,
  ],
  imports: [NgbModule],
  providers: [],
  exports: [
    NgbModule,
    PregexPipe,
    EachSlicePipe,
    FooterComponent,
    HeaderComponent,
    ClickLinkDirective,
  ],
})
export class SharedModule {}
