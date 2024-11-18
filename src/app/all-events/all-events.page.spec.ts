import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {AllEventsPage} from './all-events.page';
import {IonicModule} from "@ionic/angular";

describe('AllEventsPage', () => {
  let component: AllEventsPage;
  let fixture: ComponentFixture<AllEventsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), AllEventsPage]
}).compileComponents();

    fixture = TestBed.createComponent(AllEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
