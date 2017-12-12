import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';


import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard/dashboard.component';
import { HeroDetailComponent }      from './hero-detail/hero-detail.component';
import { HeroesComponent }          from './heroes/heroes.component';

import { HeroService }              from './hero.service';
import { MessageService }           from './messages.service';
import { MessagesComponent }        from './messages/messages.component';

import { AppRoutingModule }         from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

