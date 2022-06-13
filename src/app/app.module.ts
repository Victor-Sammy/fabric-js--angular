import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { CanvasComponent } from './creator/canvas/canvas.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
  declarations: [AppComponent, CreatorComponent, CanvasComponent],
  imports: [BrowserModule, routing, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
