import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [BrowserModule],
  exports: [ExampleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
