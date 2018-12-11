import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-overlay',
  templateUrl: './grid-overlay.component.html',
  styleUrls: ['./grid-overlay.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    class: 'grid-overlay'
  }
})
export class GridOverlayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
