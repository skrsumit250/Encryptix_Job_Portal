import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBoxComponent } from './job-box.component';

describe('JobBoxComponent', () => {
  let component: JobBoxComponent;
  let fixture: ComponentFixture<JobBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
