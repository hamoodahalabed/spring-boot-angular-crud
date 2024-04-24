import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NothingComponent } from './nothing.component';

describe('NothingComponent', () => {
  let component: NothingComponent;
  let fixture: ComponentFixture<NothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NothingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
