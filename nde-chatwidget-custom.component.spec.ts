import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdeChatwidgetCustomComponent } from './nde-chatwidget-custom.component';

describe('NdeChatwidgetCustomComponent', () => {
  let component: NdeChatwidgetCustomComponent;
  let fixture: ComponentFixture<NdeChatwidgetCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NdeChatwidgetCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdeChatwidgetCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
