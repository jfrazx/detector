import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  // tslint:disable-next-line
  selector: '[clickLink]',
})
export class ClickLinkDirective {
  @Input() clickLink: string = '/';

  constructor(private router: Router) {}

  @HostListener('click')
  onClick(): void {
    this.router.navigateByUrl(this.clickLink);
  }
}
