import {AfterViewInit, Directive, ElementRef, input} from '@angular/core';
import {SwiperOptions} from "swiper/types";

@Directive({
  selector: '[swipey]',
  standalone: true
})
export class SwiperDirective implements AfterViewInit {

  private readonly swiperElement: HTMLElement;

  readonly config = input<SwiperOptions>(undefined);

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.el.nativeElement, this.config());

    // @ts-ignore
    this.el.nativeElement.initialize();
  }
}
