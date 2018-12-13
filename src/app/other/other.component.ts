import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  @Input() content;
  @Input() showInput = false;
  @Output() inputValue: EventEmitter<any> = new EventEmitter();
  @Output() submitValue: EventEmitter<any> = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({ text: '' });
  }
  emitValue(e) {
    console.log(this.form.get('text').value);
    this.inputValue.emit(e);
  }
  onSubmit() {
    this.submitValue.emit(this.form.value);
  }
}
