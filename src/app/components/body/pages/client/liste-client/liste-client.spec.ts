import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeClient } from './liste-client';

describe('ListeClient', () => {
  let component: ListeClient;
  let fixture: ComponentFixture<ListeClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeClient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
