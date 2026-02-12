import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutClient } from './ajout-client';

describe('AjoutClient', () => {
  let component: AjoutClient;
  let fixture: ComponentFixture<AjoutClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
