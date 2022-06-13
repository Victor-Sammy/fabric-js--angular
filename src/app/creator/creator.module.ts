import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatorComponent } from './creator.component';
import { routing } from '../app.routing';
import { CanvasComponent } from './canvas/canvas.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [CreatorComponent, CanvasComponent],
  imports: [CommonModule, routing, FlexLayoutModule],
})
export class CreatorModule {}
