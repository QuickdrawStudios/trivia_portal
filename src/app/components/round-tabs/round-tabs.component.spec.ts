import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTabsComponent } from './round-tabs.component';

describe('RoundTabsComponent', () => {
  let component: RoundTabsComponent;
  let fixture: ComponentFixture<RoundTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
