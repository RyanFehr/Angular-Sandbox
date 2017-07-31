import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDemoComponent } from './theme-demo.component';

describe('ThemeDemoComponent', () => {
  let component: ThemeDemoComponent;
  let fixture: ComponentFixture<ThemeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
