import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {FaithStatementPage} from './faith-statement.page';
import {IonicModule} from "@ionic/angular";

describe('FaithStatementPage', () => {
  let component: FaithStatementPage;
  let fixture: ComponentFixture<FaithStatementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), FaithStatementPage]
}).compileComponents();

    fixture = TestBed.createComponent(FaithStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
