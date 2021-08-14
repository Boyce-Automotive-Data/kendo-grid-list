import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSizesComponent } from './gift-sizes.component';

describe('GiftSizesComponent', () => {
  let component: GiftSizesComponent;
  let fixture: ComponentFixture<GiftSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftSizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
