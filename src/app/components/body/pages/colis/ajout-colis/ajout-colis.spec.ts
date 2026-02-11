import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutColis } from './ajout-colis';

describe('AjoutColis', () => {
  let component: AjoutColis;
  let fixture: ComponentFixture<AjoutColis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutColis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutColis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
