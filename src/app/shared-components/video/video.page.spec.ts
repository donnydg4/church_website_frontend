import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';


import {VideoPage} from './video.page';
import {IonicModule} from "@ionic/angular";

describe('VideoPage', () => {
  let component: VideoPage;
  let fixture: ComponentFixture<VideoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), VideoPage]
}).compileComponents();

    fixture = TestBed.createComponent(VideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
