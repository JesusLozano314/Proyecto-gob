import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeniComponent } from './teni.component';

describe('TeniComponent', () => {
  let component: TeniComponent;
  let fixture: ComponentFixture<TeniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeniComponent]
    });
    fixture = TestBed.createComponent(TeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
