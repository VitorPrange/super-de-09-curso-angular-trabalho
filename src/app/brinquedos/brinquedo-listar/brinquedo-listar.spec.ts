import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedoListar } from './brinquedo-listar';

describe('BrinquedoListar', () => {
  let component: BrinquedoListar;
  let fixture: ComponentFixture<BrinquedoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedoListar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedoListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
