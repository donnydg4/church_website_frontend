import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {MinistriesWeSupportPage} from './ministries-we-support.page';
import {IonicModule} from "@ionic/angular";

describe('MinistriesWeSupportPage', () => {
  let component: MinistriesWeSupportPage;
  let fixture: ComponentFixture<MinistriesWeSupportPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), MinistriesWeSupportPage]
}).compileComponents();

    fixture = TestBed.createComponent(MinistriesWeSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
