import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[setting-view]',
})
export class SettingViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}