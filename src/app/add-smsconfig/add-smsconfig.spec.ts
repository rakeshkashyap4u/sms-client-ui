import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSMSConfig } from './add-smsconfig';

describe('AddSMSConfig', () => {
  let component: AddSMSConfig;
  let fixture: ComponentFixture<AddSMSConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSMSConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSMSConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
