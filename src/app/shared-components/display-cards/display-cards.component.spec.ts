import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {DisplayCardsComponent} from './display-cards.component';
import {IonicModule} from "@ionic/angular";

describe('DisplayCardsComponent', () => {
  let component: DisplayCardsComponent;
  let fixture: ComponentFixture<DisplayCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), DisplayCardsComponent]
}).compileComponents();

    fixture = TestBed.createComponent(DisplayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
