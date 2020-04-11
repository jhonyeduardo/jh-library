import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JhModule } from '@jh/ng-ui';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JhModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
