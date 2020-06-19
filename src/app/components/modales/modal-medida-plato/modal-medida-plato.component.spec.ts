import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMedidaPlatoComponent } from './modal-medida-plato.component';

describe('ModalMedidaPlatoComponent', () => {
  let component: ModalMedidaPlatoComponent;
  let fixture: ComponentFixture<ModalMedidaPlatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMedidaPlatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMedidaPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
