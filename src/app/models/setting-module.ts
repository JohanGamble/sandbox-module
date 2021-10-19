import { Type } from '@angular/core';

export interface ModuleTabSetting {
    incomingData: any;
}
export class ModuleItem {
    constructor(public component: Type<any>, public data: any) { }
}