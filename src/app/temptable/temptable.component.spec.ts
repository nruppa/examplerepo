import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemptableComponent } from './temptable.component';

describe('TemptableComponent', () => {
  let component: TemptableComponent;
  let fixture: ComponentFixture<TemptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemptableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
