import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeableMenuComponent } from './resizeable-menu.component';

describe('ResizeableMenuComponent', () => {
  let component: ResizeableMenuComponent;
  let fixture: ComponentFixture<ResizeableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeableMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
