import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeFlavorsComponent } from './cupcake-flavors.component';

describe('CupcakeFlavorsComponent', () => {
  let component: CupcakeFlavorsComponent;
  let fixture: ComponentFixture<CupcakeFlavorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CupcakeFlavorsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CupcakeFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
