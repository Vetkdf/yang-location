import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServelogComponent } from './servelog.component';

describe('ServelogComponent', () => {
  let component: ServelogComponent;
  let fixture: ComponentFixture<ServelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
