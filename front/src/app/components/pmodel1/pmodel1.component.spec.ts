import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pmodel1Component } from './pmodel1.component';

describe('Pmodel1Component', () => {
  let component: Pmodel1Component;
  let fixture: ComponentFixture<Pmodel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pmodel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pmodel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
