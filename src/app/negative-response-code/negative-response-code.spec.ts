import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeResponseCode } from './negative-response-code';

describe('NegativeResponseCode', () => {
  let component: NegativeResponseCode;
  let fixture: ComponentFixture<NegativeResponseCode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegativeResponseCode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegativeResponseCode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
