import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarbarcoComponent } from './agregarbarco.component';

describe('AgregarbarcoComponent', () => {
  let component: AgregarbarcoComponent;
  let fixture: ComponentFixture<AgregarbarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarbarcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarbarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
