import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrinquedoEditar } from './brinquedo-editar';

describe('BrinquedoEditar', () => {
  let component: BrinquedoEditar;
  let fixture: ComponentFixture<BrinquedoEditar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrinquedoEditar],
    }).compileComponents();

    fixture = TestBed.createComponent(BrinquedoEditar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
