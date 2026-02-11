import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeColis } from './liste-colis';

describe('ListeColis', () => {
  let component: ListeColis;
  let fixture: ComponentFixture<ListeColis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeColis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeColis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
