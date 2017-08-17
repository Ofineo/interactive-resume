import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent } from 'app/shared/star.component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
