import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng1xAdminlte3Component } from './ng1x-adminlte3.component';

describe('Ng1xAdminlte3Component', () => {
  let component: Ng1xAdminlte3Component;
  let fixture: ComponentFixture<Ng1xAdminlte3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng1xAdminlte3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng1xAdminlte3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
