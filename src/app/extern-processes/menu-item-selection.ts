import { MenuItem } from "../models/menu-item-module";

export interface ModuleSelection {
    moduleStateCheck(mC: MenuItem): void
    resetModuleState(mC: MenuItem[]): void
}

/**
 * @param mC currently selected Module
 * @param mCA array of current modules
 */
export function moduleStateCheck(mC: MenuItem, mCA: MenuItem[]): MenuItem[] {
    for (let indexedModule = 0; indexedModule < mCA.length; indexedModule++) {
        if (mC.id === mCA[indexedModule].id) {
            mC.moduleTransition = CSSClass.MODULE_OPEN;
        } else {
            mCA[indexedModule].moduleTransition = CSSClass.MODULE_CLOSE;
        }
    }
    return mCA;
}
export function resetModuleState(mCA: MenuItem[]): MenuItem[] {
    for (let indexedModule = 0; indexedModule < mCA.length; indexedModule++) {
        mCA[indexedModule].moduleTransition = CSSClass.MODULE_CLOSE;
    }
    return mCA;
}
export const enum CSSClass {
    MODULE_CLOSE = "module-close",
    MODULE_OPEN = "module-open",
}