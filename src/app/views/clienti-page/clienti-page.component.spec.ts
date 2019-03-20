import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientiPageComponent } from './clienti-page.component';

describe('ClientiPageComponent', () => {
  let component: ClientiPageComponent;
  let fixture: ComponentFixture<ClientiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
