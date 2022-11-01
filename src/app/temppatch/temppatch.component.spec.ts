import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemppatchComponent } from './temppatch.component';

describe('TemppatchComponent', () => {
  let component: TemppatchComponent;
  let fixture: ComponentFixture<TemppatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemppatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemppatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
