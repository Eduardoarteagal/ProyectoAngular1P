import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacableComponent } from './destacable.component';

describe('DestacableComponent', () => {
  let component: DestacableComponent;
  let fixture: ComponentFixture<DestacableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestacableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestacableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
