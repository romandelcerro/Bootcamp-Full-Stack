import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarbarcoComponent } from './listarbarco.component';

describe('ListarbarcoComponent', () => {
  let component: ListarbarcoComponent;
  let fixture: ComponentFixture<ListarbarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarbarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarbarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
