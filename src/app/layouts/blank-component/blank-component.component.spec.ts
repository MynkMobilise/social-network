import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankComponentComponent } from './blank-component.component';

describe('BlankComponentComponent', () => {
  let component: BlankComponentComponent;
  let fixture: ComponentFixture<BlankComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankComponentComponent]
    });
    fixture = TestBed.createComponent(BlankComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
