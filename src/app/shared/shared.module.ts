import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import * as fromComponents from './components';

// Pipes
import * as fromPipes from './pipes';

// Directives
import * as fromDirectives from './directives';

@NgModule({
  declarations: [
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  imports: [NgbModule, AngularFontAwesomeModule, CommonModule],
  providers: [],
  exports: [
    NgbModule,
    AngularFontAwesomeModule,
    ...fromPipes.pipes,
    ...fromDirectives.directives,
    ...fromComponents.components,
  ],
})
export class SharedModule {}
