import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupComponent } from './usergroup.component';

describe('UsergroupComponent', () => {
  let component: UsergroupComponent;
  let fixture: ComponentFixture<UsergroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
