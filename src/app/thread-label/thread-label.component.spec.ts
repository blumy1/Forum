import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadLabelComponent } from './thread-label.component';

describe('ThreadLabelComponent', () => {
  let component: ThreadLabelComponent;
  let fixture: ComponentFixture<ThreadLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
