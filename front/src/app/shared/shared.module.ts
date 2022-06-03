import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionButtonComponent } from './components/option-button/option-button.component';
import { IconImageComponent } from './components/icon-image/icon-image.component';

@NgModule({
  declarations: [
    OptionButtonComponent,
    IconImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OptionButtonComponent,
    IconImageComponent
  ],
})
export class SharedModule { }
