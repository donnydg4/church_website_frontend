import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {SermonsPage} from './sermons.page';
import {IonicModule} from "@ionic/angular";

describe('SermonsPage', () => {
  let component: SermonsPage;
  let fixture: ComponentFixture<SermonsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), SermonsPage]
}).compileComponents();

    fixture = TestBed.createComponent(SermonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
