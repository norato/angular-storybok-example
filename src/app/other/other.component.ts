import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @Input() content;

  constructor() {}

  ngOnInit() {}
}
