export enum BadgeType {
    info,
    warning,
    primary
}

export default class Badge {
    locator: string;    
    
    
    constructor(parentLocator, badgeType: BadgeType) {
        this.locator = `${parentLocator} span.k-badge-${badgeType}`;
    }
}