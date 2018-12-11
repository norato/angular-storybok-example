import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent, OtherComponent],
  imports: [BrowserModule],
  exports: [ExampleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
