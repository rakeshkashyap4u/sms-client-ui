import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActivePromotions } from './show-active-promotions';

describe('ShowActivePromotions', () => {
  let component: ShowActivePromotions;
  let fixture: ComponentFixture<ShowActivePromotions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowActivePromotions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowActivePromotions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
