import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {DevotionalsPage} from './devotionals.page';
import {IonicModule} from "@ionic/angular";

describe('DevotionalsPage', () => {
  let component: DevotionalsPage;
  let fixture: ComponentFixture<DevotionalsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), DevotionalsPage]
}).compileComponents();

    fixture = TestBed.createComponent(DevotionalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
