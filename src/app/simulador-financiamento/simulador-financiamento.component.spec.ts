import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladorFinanciamentoComponent } from './simulador-financiamento.component';

describe('SimuladorFinanciamentoComponent', () => {
  let component: SimuladorFinanciamentoComponent;
  let fixture: ComponentFixture<SimuladorFinanciamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimuladorFinanciamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimuladorFinanciamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
