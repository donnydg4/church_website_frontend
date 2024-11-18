import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {OurMinistriesPage} from './our-ministries.page';

describe('OurMinistriesPage', () => {
  let component: OurMinistriesPage;
  let fixture: ComponentFixture<OurMinistriesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), OurMinistriesPage]
}).compileComponents();

    fixture = TestBed.createComponent(OurMinistriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
