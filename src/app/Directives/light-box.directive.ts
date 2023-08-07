import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'darkblue';

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border = `3px solid ${this.defaultColor}`;
  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.border = `3px solid ${this.defaultColor}`;
  }
  @HostListener('mouseover') OnMouseOver() {
    this.elementRef.nativeElement.style.border = `3px solid ${this.highlightColor}`;
  }
  @HostListener('mouseout') OnMouseOut() {
    this.elementRef.nativeElement.style.border = `3px solid ${this.defaultColor}`;
  }
}
