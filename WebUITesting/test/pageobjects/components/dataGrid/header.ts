export default class Header {
    private currentLocator : string;

    constructor(parentLocator) {
        this.currentLocator = parentLocator ? `${parentLocator} .gridHeader`: '.gridHeader';
    }
    
    get title() {
        return $(`${this.currentLocator} #spanGridTitle`);
    }

    get createNewItemButton() {
        console.log(`CreateNewItemButton locator ->${this.currentLocator}`);
        return $(`${this.currentLocator} button`);
        //return $("#btnCreateNew");
    }

    getOwnElement() {
        return $(this.currentLocator);
    }
}