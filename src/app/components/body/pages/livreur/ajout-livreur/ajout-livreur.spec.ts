import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLivreur } from './ajout-livreur';

describe('AjoutLivreur', () => {
  let component: AjoutLivreur;
  let fixture: ComponentFixture<AjoutLivreur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutLivreur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutLivreur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
