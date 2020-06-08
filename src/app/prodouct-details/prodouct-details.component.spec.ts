import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdouctDetailsComponent } from './prodouct-details.component';

describe('ProdouctDetailsComponent', () => {
  let component: ProdouctDetailsComponent;
  let fixture: ComponentFixture<ProdouctDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdouctDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdouctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
