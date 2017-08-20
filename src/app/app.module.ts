import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarComponent } from 'app/shared/star.component';
import { DashBoardComponent } from 'app/Dashboard/dashBoard.Component';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
