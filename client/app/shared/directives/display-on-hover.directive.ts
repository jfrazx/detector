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
  @HostBinding('style.visibility') visible = 'inherit';

  @Input() displayOnHover = 1;

  @Input() displayNone = true;

  @Input() debug = false;

  private events = ['mouseenter', 'mouseleave'];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const parent = this.getParent();
    const change = this.displayNone ? this.toggleHidden : this.toggleVisible;

    this.events.forEach(event => {
      this.renderer.listen(parent, event, () => {
        if (this.debug) {
          console.log(
            `::displayOnHover:: hover event: ${event} :: hidden: ${
              this.hidden
            } :: visibility: ${this.visible}`
          );
        }

        change.call(this);
      });
    });
  }

  ngAfterContentInit() {
    this.displayNone ? (this.hidden = true) : (this.visible = 'hidden');
  }

  ngOnChanges() {
    this.displayOnHover = parseInt(this.displayOnHover as any, 10);

    if (this.invalidDepth()) {
      this.displayOnHover = 1;
    }
  }

  toggleHidden(): void {
    this.hidden = !this.hidden;
  }

  toggleVisible(): void {
    this.visible = this.visible === 'hidden' ? 'inherit' : 'hidden';
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

  private invalidDepth(): boolean {
    return !Number.isInteger(this.displayOnHover) || this.displayOnHover <= 0;
  }
}
