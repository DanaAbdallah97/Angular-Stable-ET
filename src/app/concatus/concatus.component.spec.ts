import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatusComponent } from './concatus.component';

describe('ConcatusComponent', () => {
  let component: ConcatusComponent;
  let fixture: ComponentFixture<ConcatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
