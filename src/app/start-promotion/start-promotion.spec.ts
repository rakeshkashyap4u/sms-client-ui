import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPromotion } from './start-promotion';

describe('StartPromotion', () => {
  let component: StartPromotion;
  let fixture: ComponentFixture<StartPromotion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartPromotion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPromotion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
