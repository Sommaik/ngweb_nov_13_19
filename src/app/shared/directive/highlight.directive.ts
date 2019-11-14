import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') color: string;

  constructor(private el: ElementRef<HTMLElement>) { }

  @HostListener('mouseover') onmouseover() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') onmouseleave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
