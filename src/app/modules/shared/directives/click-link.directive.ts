import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[clickLink]'
})
export class ClickLinkDirective {
  @Input()
  clickLink: string;

  constructor(
    private el: ElementRef,
    private router: Router,
  ) { }

  @HostListener('click')
  onClick(): void {
    this.router.navigateByUrl(this.clickLink);
  }
}
