import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopUpRequest } from './top-up-request';
import { provideRouter } from '@angular/router';

describe('TopUpRequest', () => {
  let component: TopUpRequest;
  let fixture: ComponentFixture<TopUpRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopUpRequest],
        providers: [provideRouter([])], 
    }).compileComponents();

    fixture = TestBed.createComponent(TopUpRequest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
