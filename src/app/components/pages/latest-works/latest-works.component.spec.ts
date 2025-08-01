import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestWorksComponent } from './latest-works.component';

describe('LatestWorksComponent', () => {
  let component: LatestWorksComponent;
  let fixture: ComponentFixture<LatestWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
