import {ComponentFixture, TestBed} from '@angular/core/testing';
import {KidsMinistryPage} from './kids-ministry.page';

describe('KidsMinistryPage', () => {
  let component: KidsMinistryPage;
  let fixture: ComponentFixture<KidsMinistryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsMinistryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
