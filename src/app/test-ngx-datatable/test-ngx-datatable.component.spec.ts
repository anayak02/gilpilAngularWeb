import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNgxDatatableComponent } from './test-ngx-datatable.component';

describe('TestNgxDatatableComponent', () => {
  let component: TestNgxDatatableComponent;
  let fixture: ComponentFixture<TestNgxDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNgxDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNgxDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
