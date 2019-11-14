import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvFormComponent } from './adv-form.component';

describe('AdvFormComponent', () => {
  let component: AdvFormComponent;
  let fixture: ComponentFixture<AdvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
