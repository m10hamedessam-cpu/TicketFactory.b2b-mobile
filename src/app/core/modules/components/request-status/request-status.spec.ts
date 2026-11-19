import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestStatus } from './request-status';
import { provideRouter } from '@angular/router';

describe('RequestStatus', () => {
  let component: RequestStatus;
  let fixture: ComponentFixture<RequestStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestStatus],
        providers: [provideRouter([])], 
    }).compileComponents();

    fixture = TestBed.createComponent(RequestStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
