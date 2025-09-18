import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoConfiguration } from './mo-configuration';

describe('MoConfiguration', () => {
  let component: MoConfiguration;
  let fixture: ComponentFixture<MoConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
