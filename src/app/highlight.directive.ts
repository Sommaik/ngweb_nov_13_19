import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
