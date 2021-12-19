import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioBotoesComponent } from './cardapio-botoes.component';

describe('CardapioBotoesComponent', () => {
  let component: CardapioBotoesComponent;
  let fixture: ComponentFixture<CardapioBotoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioBotoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
