import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlankComponentComponent } from './layouts/blank-component/blank-component.component';
import { FullComponentComponent } from './layouts/full-component/full-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponentComponent,
    FullComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
