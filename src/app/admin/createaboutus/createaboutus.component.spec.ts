import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaboutusComponent } from './createaboutus.component';

describe('CreateaboutusComponent', () => {
  let component: CreateaboutusComponent;
  let fixture: ComponentFixture<CreateaboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
