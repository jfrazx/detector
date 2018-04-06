import { NgModule } from '@angular/core';

import { RouterStateSerializer } from '@ngrx/router-store';

import { CustomSerializer } from './store';

// Components
import { AppComponent } from './app.component';

// Imports
import * as fromImports from './app.imports';

@NgModule({
  declarations: [AppComponent],
  imports: [...fromImports.imports],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
