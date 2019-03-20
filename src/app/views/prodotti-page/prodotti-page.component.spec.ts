import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiPageComponent } from './prodotti-page.component';

describe('ProdottiPageComponent', () => {
  let component: ProdottiPageComponent;
  let fixture: ComponentFixture<ProdottiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdottiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
