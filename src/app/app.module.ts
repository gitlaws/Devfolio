import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { CardComponent } from './components/card/card.component';
import { NavComponent } from './components/nav/nav.component';
import { CoverComponent } from './components/cover/cover.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    CardComponent,
    NavComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
