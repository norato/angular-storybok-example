import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtherComponent } from './other.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('OtherComponent', () => {
  let component: OtherComponent;
  let fixture: ComponentFixture<OtherComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OtherComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
