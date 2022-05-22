import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  } // whenever this property changes, execute a method (this is the setter of the property)

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
