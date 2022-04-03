import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitsComponent } from './fits.component';

describe('FitsComponent', () => {
  let component: FitsComponent;
  let fixture: ComponentFixture<FitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
