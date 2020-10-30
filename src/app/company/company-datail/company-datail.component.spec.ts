import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDatailComponent } from './company-datail.component';

describe('CompanyDatailComponent', () => {
  let component: CompanyDatailComponent;
  let fixture: ComponentFixture<CompanyDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
