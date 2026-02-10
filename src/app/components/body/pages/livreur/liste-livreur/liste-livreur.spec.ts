import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivreur } from './liste-livreur';

describe('ListeLivreur', () => {
  let component: ListeLivreur;
  let fixture: ComponentFixture<ListeLivreur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeLivreur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLivreur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
