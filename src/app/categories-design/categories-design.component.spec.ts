import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDesignComponent } from './categories-design.component';

describe('CategoriesDesignComponent', () => {
  let component: CategoriesDesignComponent;
  let fixture: ComponentFixture<CategoriesDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
