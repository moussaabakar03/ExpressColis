import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivraison } from './liste-livraison';

describe('ListeLivraison', () => {
  let component: ListeLivraison;
  let fixture: ComponentFixture<ListeLivraison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeLivraison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeLivraison);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
