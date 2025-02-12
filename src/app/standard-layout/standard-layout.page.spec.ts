import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {StandardLayoutPage} from './standard-layout.page';
import {IonicModule} from "@ionic/angular";

describe('StandardLayoutPage', () => {
  let component: StandardLayoutPage;
  let fixture: ComponentFixture<StandardLayoutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), StandardLayoutPage]
}).compileComponents();

    fixture = TestBed.createComponent(StandardLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
