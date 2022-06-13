import { Component, ElementRef, OnInit } from '@angular/core';
import 'fabric';

declare let fabric;

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  private canvas;
  private shape;
  private shape2;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('canvas', {
      width: this.element.nativeElement.parentElement.clientWidth,
      height: this.element.nativeElement.parentElement.clientHeight,
    });

    this.shape = new fabric.Rect({
      width: 200,
      height: 200,
      top: 100,
      left: 100,
      fill: 'red',
    });

    this.shape2 = new fabric.Circle({
      top: 100,
      left: 400,
      radius: 100,
      fill: 'yellow',
      borderColor: 'red',
    });

    this.shape.on('selected', function () {
      alert('Rect is clicked');
    });
    this.shape.on('deselected', function () {
      alert('Rect is unclicked');
    });
    this.shape2.on('selected', function () {
      alert('Circle is clicked');
    });
    this.shape2.on('deselected', function () {
      alert('Cirle is unclicked');
    });

    this.canvas.add(this.shape);
    this.canvas.add(this.shape2);
  }
}
