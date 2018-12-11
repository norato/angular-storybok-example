import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { OtherComponent } from './other/other.component';
import { GridOverlayComponent } from './grid-overlay/grid-overlay.component';

const allComponents = [
  AppComponent,
  ExampleComponent,
  OtherComponent,
  GridOverlayComponent
];

@NgModule({
  declarations: [...allComponents],
  imports: [BrowserModule],
  exports: [...allComponents],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
