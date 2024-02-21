import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeQuantityComponent } from './cupcake-quantity.component';

describe('CupcakeQuantityComponent', () => {
  let component: CupcakeQuantityComponent;
  let fixture: ComponentFixture<CupcakeQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupcakeQuantityComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(CupcakeQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
