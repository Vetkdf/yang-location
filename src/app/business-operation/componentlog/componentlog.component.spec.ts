import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentlogComponent } from './componentlog.component';

describe('ComponentlogComponent', () => {
  let component: ComponentlogComponent;
  let fixture: ComponentFixture<ComponentlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
