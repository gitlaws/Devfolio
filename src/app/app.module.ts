import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDocumentationComponent } from './components/component-documentation/component-documentation.component';
import { CardComponent } from './components/card/card.component';

import { CoverComponent } from './components/cover/cover.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GridPanelComponent } from './components/grid-panel/grid-panel.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { MockComponent } from './components/mock/mock.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDocumentationComponent,
    CardComponent,
    CoverComponent,
    NavbarComponent,
    GridPanelComponent,
    ScrollComponent,
    MockComponent,
    ToggleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
