import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SeriesListPage} from './series-list.page';

describe('SeriesListPage', () => {
  let component: SeriesListPage;
  let fixture: ComponentFixture<SeriesListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), SeriesListPage]
}).compileComponents();

    fixture = TestBed.createComponent(SeriesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
