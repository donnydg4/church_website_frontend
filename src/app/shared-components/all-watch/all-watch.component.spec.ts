import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {AllWatchComponent} from './all-watch.component';
import {IonicModule} from "@ionic/angular";

describe('AllWatchComponent', () => {
  let component: AllWatchComponent;
  let fixture: ComponentFixture<AllWatchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), AllWatchComponent]
}).compileComponents();

    fixture = TestBed.createComponent(AllWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
