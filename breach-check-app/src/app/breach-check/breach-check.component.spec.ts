import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreachCheckComponent } from './breach-check.component';

describe('BreachCheckComponent', () => {
  let component: BreachCheckComponent;
  let fixture: ComponentFixture<BreachCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreachCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreachCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
