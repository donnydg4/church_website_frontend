import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {OurChurchPage} from './our-church.page';
import {IonicModule} from "@ionic/angular";

describe('OurChurchPage', () => {
  let component: OurChurchPage;
  let fixture: ComponentFixture<OurChurchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), OurChurchPage]
}).compileComponents();

    fixture = TestBed.createComponent(OurChurchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
