import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {LeadershipPage} from './leadership.page';
import {IonicModule} from "@ionic/angular";

describe('LeadershipPage', () => {
  let component: LeadershipPage;
  let fixture: ComponentFixture<LeadershipPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), LeadershipPage]
}).compileComponents();

    fixture = TestBed.createComponent(LeadershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
