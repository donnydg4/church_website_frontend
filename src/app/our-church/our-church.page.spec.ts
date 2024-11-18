import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {OurChurchPage} from './our-church.page';

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
