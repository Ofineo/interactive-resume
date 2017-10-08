import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StarComponent } from 'app/shared/star.component';
import { DashBoardComponent } from 'app/Dashboard/dashBoard.Component';
import { DefaultComponent } from './default/default.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    DashBoardComponent,
    DefaultComponent,
    ExperienceComponent,
    AboutMeComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashBoardComponent},
      {path: 'experience', component: ExperienceComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: '', component: DefaultComponent},
      {path: '**', component: DefaultComponent},
    ]),
    BrowserAnimationsModule
  ],
  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
