import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LateralButtonComponent } from './shared/lateral-button/lateral-button.component';
import { LateralSectionComponent } from './shared/lateral-section/lateral-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LateralButtonComponent,
    LateralSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
