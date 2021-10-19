export class BaseModule {
    get id(): number {
        return this.id;
    }
    set header(value: string) {
        if (!value.valueOf())
            throw new Error("Not a string");
        else
            this.header = value;
    }
}