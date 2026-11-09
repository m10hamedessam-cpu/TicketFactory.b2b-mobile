import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuList } from './menu-list';
import { provideRouter } from '@angular/router';

describe('MenuList', () => {
  let component: MenuList;
  let fixture: ComponentFixture<MenuList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuList],
        providers: [provideRouter([])], 
    }).compileComponents();

    fixture = TestBed.createComponent(MenuList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
