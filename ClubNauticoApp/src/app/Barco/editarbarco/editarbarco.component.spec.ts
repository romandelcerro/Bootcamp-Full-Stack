import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarbarcoComponent } from './editarbarco.component';

describe('EditarbarcoComponent', () => {
  let component: EditarbarcoComponent;
  let fixture: ComponentFixture<EditarbarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarbarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarbarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
