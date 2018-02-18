import {
  Input,
  OnInit,
  Directive,
  OnChanges,
  Renderer2,
  ElementRef,
  HostBinding,
  AfterContentInit,
} from '@angular/core';

@Directive({
  // tslint:disable-next-line
  selector: '[displayOnHover]',
})
export class DisplayOnHoverDirective
  implements OnInit, AfterContentInit, OnChanges {
  @HostBinding('hidden') hidden = false;

  @Input() displayOnHover = 1;

  @Input() debug = false;

  private events = ['mouseenter', 'mouseleave'];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const parent = this.getParent();
    this.events.forEach(event => {
      this.renderer.listen(parent, event, () => {
        if (this.debug) {
          console.log(`::displayOnHover:: hover event: ${event}`, this.hidden);
        }
        this.hidden = !this.hidden;
      });
    });
  }

  ngAfterContentInit(): void {
    this.hidden = true;
  }

  ngOnChanges() {
    this.displayOnHover = parseInt(this.displayOnHover as any, 10);

    if (!Number.isInteger(this.displayOnHover) || this.displayOnHover <= 0) {
      this.displayOnHover = 1;
    }
  }

  private getParent(): ElementRef {
    let el = this.el.nativeElement;

    if (this.debug) {
      console.log('::displayOnHover:: initial element', el);
    }

    for (let index = 0; index < this.displayOnHover; index++) {
      el = this.renderer.parentNode(el);
      if (this.debug) {
        console.log('::displayOnHover:: next element', el);
      }
    }

    if (this.debug) {
      console.log('::displayOnHover:: parent element', el);
    }

    return el;
  }
}
