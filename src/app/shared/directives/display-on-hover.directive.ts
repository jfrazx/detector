import {
  OnInit,
  Directive,
  Renderer2,
  ElementRef,
  HostBinding,
  AfterContentInit,
} from '@angular/core';

@Directive({
  // tslint:disable-next-line
  selector: '[displayOnHover]',
})
export class DisplayOnHoverDirective implements OnInit, AfterContentInit {
  @HostBinding('hidden') hidden: boolean = false;

  private events = ['mouseenter', 'mouseleave'];

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.events.forEach(event => {
      this.renderer.listen(
        this.renderer.parentNode(this.el.nativeElement),
        event,
        () => {
          this.hidden = !this.hidden;
        }
      );
    });
  }

  ngAfterContentInit(): void {
    this.hidden = true;
  }
}
