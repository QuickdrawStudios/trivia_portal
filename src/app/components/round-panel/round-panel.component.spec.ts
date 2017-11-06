import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundPanelComponent } from './round-panel.component';

describe('RoundPanelComponent', () => {
  let component: RoundPanelComponent;
  let fixture: ComponentFixture<RoundPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
