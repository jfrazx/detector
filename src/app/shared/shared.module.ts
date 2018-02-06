import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { FooterComponent, HeaderComponent } from './components';

import { EachSlicePipe } from './pipes';
import { ClickLinkDirective } from './directives/click-link.directive';
import { PregexPipe } from './pipes/pregex.pipe';
import { XRemoveComponent } from './components/x-remove/x-remove.component';
import { DisplayOnHoverDirective } from './directives/display-on-hover.directive';

@NgModule({
  declarations: [
    EachSlicePipe,
    FooterComponent,
    HeaderComponent,
    XRemoveComponent,
    ClickLinkDirective,
    PregexPipe,
    DisplayOnHoverDirective,
  ],
  imports: [NgbModule, AngularFontAwesomeModule],
  providers: [],
  exports: [
    NgbModule,
    PregexPipe,
    EachSlicePipe,
    FooterComponent,
    HeaderComponent,
    XRemoveComponent,
    ClickLinkDirective,
    DisplayOnHoverDirective,
    AngularFontAwesomeModule,
  ],
})
export class SharedModule {}
