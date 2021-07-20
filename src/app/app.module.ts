import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { RepeatTypeComponent } from './repeat-section.type';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    RepeatTypeComponent,
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */