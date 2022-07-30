import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerViewComponent } from './influencer-view.component';

describe('InfluencerViewComponent', () => {
  let component: InfluencerViewComponent;
  let fixture: ComponentFixture<InfluencerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
