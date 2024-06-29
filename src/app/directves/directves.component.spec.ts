import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectvesComponent } from './directves.component';

describe('DirectvesComponent', () => {
  let component: DirectvesComponent;
  let fixture: ComponentFixture<DirectvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectvesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
