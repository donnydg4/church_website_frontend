import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {GuestSpeakersPage} from './guest-speakers.page';
import {IonicModule} from "@ionic/angular";

describe('GuestSpeakersPage', () => {
  let component: GuestSpeakersPage;
  let fixture: ComponentFixture<GuestSpeakersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), GuestSpeakersPage]
}).compileComponents();

    fixture = TestBed.createComponent(GuestSpeakersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
