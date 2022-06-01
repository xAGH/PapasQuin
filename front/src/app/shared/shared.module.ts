import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionButtonComponent } from './components/option-button/option-button.component';


@NgModule({
  declarations: [
    OptionButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    OptionButtonComponent
  ],
})
export class SharedModule { }
