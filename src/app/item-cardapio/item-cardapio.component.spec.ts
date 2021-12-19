import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCardapioComponent } from './item-cardapio.component';

describe('ItemCardapioComponent', () => {
  let component: ItemCardapioComponent;
  let fixture: ComponentFixture<ItemCardapioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCardapioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
