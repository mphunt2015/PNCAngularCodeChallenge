import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerDisplayComponent } from './flower-display-component';

describe('FlowerDisplayComponent', () => {
  let component: FlowerDisplayComponent;
  let fixture: ComponentFixture<FlowerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
