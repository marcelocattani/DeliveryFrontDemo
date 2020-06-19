import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaPlatoScreenComponent } from './medida-plato-screen.component';

describe('MedidaPlatoScreenComponent', () => {
  let component: MedidaPlatoScreenComponent;
  let fixture: ComponentFixture<MedidaPlatoScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidaPlatoScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidaPlatoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
