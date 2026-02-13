import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutLivraison } from './ajout-livraison';

describe('AjoutLivraison', () => {
  let component: AjoutLivraison;
  let fixture: ComponentFixture<AjoutLivraison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutLivraison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutLivraison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
