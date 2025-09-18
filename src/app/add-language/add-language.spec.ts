import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguage } from './add-language';

describe('AddLanguage', () => {
  let component: AddLanguage;
  let fixture: ComponentFixture<AddLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
