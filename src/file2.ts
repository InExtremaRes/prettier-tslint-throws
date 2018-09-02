interface AnyObject {
    [k: string]: unknown;
}

export class SuperClass {
    private readonly objects: ReadonlyArray<AnyObject>;

    public constructor(fn?: () => ReadonlyArray<AnyObject>) {
        let temp = undefined;
        this.objects = [];
    }
}
