
import pages from '../../../pages/index';
import clientDashCommonPage from '../../../pages_new/clientDash/clientDashCommonPage';

export default class MenuItemInfo {
    private locator: string;
    private pageContent;
    public menuItems: object;
    
    constructor(parentLocator, currentLocator, pageContent) {
        this.locator = `${parentLocator} ${currentLocator}`;
        this.pageContent = pageContent; 
    }    

    select() {
        $(this.locator).click();
        //pages.clientDash.currentPage = new this.pageObject();           
        clientDashCommonPage.content = this.pageContent;
        browser.setTimeout({ 'pageLoad': 10000 });
    }

}