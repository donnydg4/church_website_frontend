import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {MissionsPage} from './missions.page';
import {IonicModule} from "@ionic/angular";

describe('MissionsPage', () => {
  let component: MissionsPage;
  let fixture: ComponentFixture<MissionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), MissionsPage]
}).compileComponents();

    fixture = TestBed.createComponent(MissionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
