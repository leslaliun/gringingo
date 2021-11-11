import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pmodel2Component } from './pmodel2.component';

describe('Pmodel2Component', () => {
  let component: Pmodel2Component;
  let fixture: ComponentFixture<Pmodel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pmodel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pmodel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
