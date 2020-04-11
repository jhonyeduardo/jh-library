import { NgModule } from '@angular/core';

import { JhButtonModule } from './components/button/button.module'

@NgModule({
  imports: [
    JhButtonModule
  ],
  exports: [
    JhButtonModule
  ]
})
export class JhModule { }