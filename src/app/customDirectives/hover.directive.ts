import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onHover() {
    this.el.nativeElement.style.cursor = 'pointer';
  }
}
