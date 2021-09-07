export enum IconTypes {
    clock,
    delete,
    edit,
    gear,
    info,
    help,
    restore
}

export default class Icon {
    locator: string;    
    constructor(parentLocator, iconType: IconTypes) {
        this.locator = `${parentLocator} span.k-i-${iconType}`;
    }
}