import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {DirectionsPage} from './directions.page';
import {IonicModule} from "@ionic/angular";

describe('DirectionsPage', () => {
  let component: DirectionsPage;
  let fixture: ComponentFixture<DirectionsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), DirectionsPage]
}).compileComponents();

    fixture = TestBed.createComponent(DirectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
