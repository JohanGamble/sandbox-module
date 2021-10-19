import { CSSClass } from "../extern-processes/menu-item-selection";
import { BaseModule } from "./base-module";

export class MenuItem implements BaseModule {
    private _id: number = 0;
    private _header: string = "";
    private _moduleTransition: CSSClass;
    private _componentLink: string = "";

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        if (!value.valueOf())
            throw new Error("Not a number");
        else
            this._id = value;
    }
    get header(): string {
        return this._header;
    }
    set header(value: string) {
        if (!value.valueOf())
            throw new Error("Not a string");
        else
            this._header = value;
    }
    get moduleTransition(): CSSClass {
        return this._moduleTransition;
    }
    set moduleTransition(value: CSSClass) {
        this._moduleTransition = value;
    }
    get componentLink(): string {
        return this._componentLink;
    }
    set componentLink(value: string) {
        this._componentLink = value;
    }
    constructor(id: number, header: string, moduleTransition: CSSClass, componentLink: string) {
        this._id = id;
        this._header = header;
        this._moduleTransition = moduleTransition;
        this._componentLink = componentLink;
    }
}