import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SozoPage } from './sozo.page';

describe('SozoPage', () => {
  let component: SozoPage;
  let fixture: ComponentFixture<SozoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SozoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
