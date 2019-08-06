import {Directive, ElementRef, Input, ModuleWithProviders, NgModule, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMainCol]'
})
export class MainColDirective implements OnInit {

  @Input() formControl: any;
  @Input() formControlValue: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const el = this.el.nativeElement;
    this.renderer.setAttribute(el, "size", "12");
    this.renderer.setAttribute(el, "size-xl", "8");
    this.renderer.setAttribute(el, "offset-xl", "2");
    this.renderer.setAttribute(el, "size-md", "10");
    this.renderer.setAttribute(el, "offset-md", "1");
    this.renderer.setAttribute(el, "pad-0", "");

    this.renderer.setAttribute(el.parentNode.parentNode, "pad-0", "");
  }
}


@NgModule({
  declarations: [MainColDirective],
  exports: [MainColDirective]
})
export class MainColModule {
}
